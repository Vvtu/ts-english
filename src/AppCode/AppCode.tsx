import React, { PureComponent, MouseEvent } from "react";

import PopupWindowForAdvancedMenu from "../PopupWindows/PopupWindowForAdvancedMenu";
import PopupWindowForVoicesMenu from "../PopupWindows/PopupWindowForVoicesMenu";
import ArrowIcon from "./svg/ArrowIcon";
import AdvancedIcon from "./svg/AdvancedIcon";

import { getDictionaryWithMix, handleDictClicked } from "../lib/lib";
import getVoicesArray from "../lib/getVoicesArray";
import { ICON_SIZE } from "../Constants/constants";

import { dictType, dictionariesType } from "../Types";

const VOICE_INDEX_IN_VOICES_ARRAY = "voiceIndexInVoicesArray";

// console.log('process.env = ', process.env);
// console.log(
// 	'process.env.REACT_APP_SECRET_CODE = ',
// 	process.env && process.env.REACT_APP_SECRET_CODE,
// );

export interface Props {
  dictionaries: dictionariesType;
}

interface State {
  activeIndex: number;
  showEnglish: boolean;
  showAdvanced: boolean;
  appcodeIsSpeaking: boolean;
  showVoicesMenu: boolean;
  voiceIndex: string | null;
  randomDictionary: dictType[];
  greenColor: string;
  advancedColor: string;
  whiteColor: string;
}

const initialState: State = {
  activeIndex: 0,
  showEnglish: false,
  showAdvanced: false,
  appcodeIsSpeaking: false,
  showVoicesMenu: false,
  voiceIndex: null,
  greenColor: "",
  advancedColor: "",
  whiteColor: "",
  randomDictionary: []
};

const nullObj: dictType = { rus: "", eng: "" };

class AppCode extends PureComponent<Props, State> {
  voicesArray: any;
  engVoice: any;
  appcodeIsSpeakingTimeOut: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      ...initialState,
      randomDictionary: getDictionaryWithMix(this.props.dictionaries)
    };
  }

  componentDidMount() {
    this.initializeState();
  }

  incrementLocalStorage = () => {
    const { activeIndex, randomDictionary, showEnglish } = this.state;
    if (showEnglish) {
      const activeObj =
        activeIndex !== undefined && randomDictionary[activeIndex];
      const russian = activeObj && activeObj.rus;
      if (russian) {
        const item: string | null =
          localStorage.getItem(russian) || "";
        const shown = parseInt(item, 10) || 0;
        const newItem = String(shown + 1);
        localStorage.setItem(russian, newItem);
      }
    }
  };

  handleForwardClicked = (event: MouseEvent) => {
    event.stopPropagation();
    this.incrementLocalStorage();

    const { activeIndex } = this.state;

    const newActiveIndex = activeIndex + 1;
    // console.log('handleForwardClicked newActiveIndex = ', newActiveIndex);
    this.setState({
      activeIndex: newActiveIndex,
      showEnglish: false,
      appcodeIsSpeaking: false
    });
  };

  handleBackClicked = (event: MouseEvent) => {
    event.stopPropagation();
    this.incrementLocalStorage();

    const { activeIndex } = this.state;
    const newActiveIndex = activeIndex === 0 ? 0 : activeIndex - 1;
    // console.log('handleBackClicked newActiveIndex = ', newActiveIndex);
    this.setState({
      activeIndex: newActiveIndex,
      showEnglish: false,
      appcodeIsSpeaking: false
    });
  };

  handleShowEnglishClicked = (event: MouseEvent) => {
    event.stopPropagation();
    this.setState({
      showEnglish: this.state.showEnglish !== true,
      appcodeIsSpeaking: false
    });
  };

  handleAdvancedClicked = (event: MouseEvent) => {
    event.stopPropagation();
    this.setState({
      showAdvanced: true,
      appcodeIsSpeaking: false
    });
  };
  handleClosePopupClicked = () => {
    this.setState({
      showAdvanced: false,
      appcodeIsSpeaking: false,
      showVoicesMenu: false
    });
  };

  handleHideItemClicked = () => {
    const { activeIndex, randomDictionary } = this.state;
    if (
      activeIndex !== undefined &&
      activeIndex < randomDictionary.length
    ) {
      const activeObj = randomDictionary[activeIndex];
      const russian = activeObj.rus;
      if (russian) {
        localStorage.setItem(russian, "d");
      }
      const newRandomDictionary = randomDictionary
        .slice(0, activeIndex)
        .concat(randomDictionary.slice(activeIndex + 1));
      this.setState({
        randomDictionary: newRandomDictionary,
        showEnglish: false,
        showAdvanced: false,
        appcodeIsSpeaking: false
      });
    }
  };

  handleStatisticClicked = (event: MouseEvent) => {
    event.stopPropagation();
    if (this.state.showEnglish) {
      this.handleForwardClicked(event);
    } else {
      this.handleShowEnglishClicked(event);
    }
  };

  handleUnhideAllItemsClicked = () => {
    localStorage.clear();
    this.setState({
      activeIndex: 0,
      randomDictionary: getDictionaryWithMix(this.props.dictionaries),
      showEnglish: false,
      showAdvanced: false,
      appcodeIsSpeaking: false,
      voiceIndex: null
    });
  };

  handleTextToSpeachClicked = (event: MouseEvent, text: string) => {
    event.stopPropagation();
    if (this.state.appcodeIsSpeaking) {
      return false;
    }
    const utterThis = new SpeechSynthesisUtterance();

    const synth = window.speechSynthesis;
    if (utterThis && synth) {
      if (this.engVoice) {
        utterThis.voice = this.engVoice;
      }
      // console.log('voices = ', this.voicesArray);

      if (
        this.state.voiceIndex &&
        this.voicesArray &&
        this.voicesArray[parseInt(this.state.voiceIndex || "0", 10)]
      ) {
        utterThis.voice = this.voicesArray[
          parseInt(this.state.voiceIndex || "0", 10)
        ];
      }

      // utterThis.voiceURI = 'Google UK English Female';
      utterThis.volume = 1.0; // 0 to 1
      utterThis.rate = 1.0; // 0.1 to 10
      // utterThis.pitch = 2; //0 to 2
      utterThis.lang = "en-GB";
      this.setState({ appcodeIsSpeaking: true });
      utterThis.onend = event => {
        this.setState({ appcodeIsSpeaking: false });
        if (this.appcodeIsSpeakingTimeOut) {
          clearTimeout(this.appcodeIsSpeakingTimeOut);
          this.appcodeIsSpeakingTimeOut = null;
        }
      };
      this.appcodeIsSpeakingTimeOut = setTimeout(
        () => {
          this.setState({ appcodeIsSpeaking: false });
          this.appcodeIsSpeakingTimeOut = null;
        },
        6000 // in case of utterThis.onend failed
      );

      const textWithNoComments = text
        .split("//")
        .reduce(
          (
            accumulator: string,
            currentValue: string,
            index: number
          ) => (index % 2 ? accumulator : accumulator + currentValue),
          ""
        );
      utterThis.text = textWithNoComments;
      synth.speak(utterThis);
    }
  };

  handleDictClickedLocal = (number: number) => {
    handleDictClicked(number);
    this.setState({
      activeIndex: 0,
      randomDictionary: getDictionaryWithMix(this.props.dictionaries),
      showEnglish: false,
      showAdvanced: false,
      appcodeIsSpeaking: false
    });
  };

  handleShowSetVoicePopupClicked = () => {
    this.setState({
      showAdvanced: false,
      showVoicesMenu: true
    });
  };

  handleVoiceDidSelect = (voiceIndex: string) => {
    this.setState({
      showAdvanced: false,
      showVoicesMenu: false,
      voiceIndex
    });
    localStorage.setItem(VOICE_INDEX_IN_VOICES_ARRAY, voiceIndex);
  };

  initializeState = () => {
    const element = document.documentElement;
    // console.log('window.screen = ', window.screen);
    // const height = Math.max(
    // 	parseInt(window.screen.height, 10),
    // 	parseInt(window.screen.width, 10),
    // );
    // const width = Math.min(
    // 	parseInt(window.screen.height, 10),
    // 	parseInt(window.screen.width, 10),
    // );
    // console.log('height , width = ',height , width);

    // element.style.setProperty('--screen-height', height + 'px');
    // element.style.setProperty('--screen-width', width + 'px');
    const voiceIndex = localStorage.getItem(
      VOICE_INDEX_IN_VOICES_ARRAY
    );

    const styles = getComputedStyle(element);
    this.setState({
      ...initialState,
      randomDictionary: getDictionaryWithMix(this.props.dictionaries),
      greenColor: String(
        styles.getPropertyValue("--english-text-color")
      ).trim(),
      advancedColor: String(
        styles.getPropertyValue("--settings-color")
      ).trim(),
      whiteColor: String(
        styles.getPropertyValue("--base-text-color")
      ).trim(),
      voiceIndex
    });
    // get voices array
    window.speechSynthesis.getVoices();
    this.forceUpdate();

    getVoicesArray().then(result => {
      this.voicesArray = result;
    });
  };

  render() {
    const {
      activeIndex,
      randomDictionary,
      showAdvanced,
      showVoicesMenu,
      showEnglish,
      appcodeIsSpeaking,
      greenColor,
      advancedColor,
      whiteColor
    } = this.state;

    if (
      activeIndex >= randomDictionary.length &&
      randomDictionary.length > 0
    ) {
      return (
        <div
          className="popup__full_screen_div"
          style={{ backgroundColor: whiteColor }}
          onClick={this.initializeState}
          onDoubleClick={this.initializeState}
        >
          <div className="popup__window popup__scroll appcode__eng_text_color">
            {"That's all!. Click to restart."}
          </div>
        </div>
      );
    }

    const activeObj =
      (activeIndex !== undefined && randomDictionary[activeIndex]) ||
      nullObj;
    const russian = activeObj.rus;

    const english = activeObj.eng;
    const count = randomDictionary.length;

    const item = localStorage.getItem(russian);
    const shown = parseInt(item || "0", 10) || 0;

    // console.log('App code render this.props = ', this.props);
    // console.log('App code render activeObj = ', activeObj);
    // console.log('App code count = ', count);
    // console.log('App code english = ', english);

    return (
      <div className="appcode__grid">
        <div className="appcode__info">
          <div className="appcode__info2">
            <ArrowIcon
              height={ICON_SIZE}
              onClick={this.handleBackClicked}
              onDoubleClick={this.handleBackClicked}
              width={ICON_SIZE}
              fill={whiteColor}
            />
            <AdvancedIcon
              height={ICON_SIZE}
              onClick={this.handleAdvancedClicked}
              onDoubleClick={this.handleAdvancedClicked}
              width={ICON_SIZE}
              fill={advancedColor}
            />

            {showEnglish ? (
              <ArrowIcon
                className="appcode__icon_rotate_back"
                height={ICON_SIZE}
                onClick={this.handleForwardClicked}
                onDoubleClick={this.handleForwardClicked}
                width={ICON_SIZE}
                fill={greenColor}
              />
            ) : (
              <ArrowIcon
                className="appcode__icon_rotate"
                height={ICON_SIZE}
                onClick={this.handleShowEnglishClicked}
                onDoubleClick={this.handleShowEnglishClicked}
                width={ICON_SIZE}
                fill={greenColor}
              />
            )}

            <div
              onClick={this.handleStatisticClicked}
              onDoubleClick={this.handleStatisticClicked}
            >
              <span>{activeIndex + 1 + "/" + count}</span>
              <span className="appcode__eng_text_color">
                {"(" + shown + ")"}
              </span>
            </div>

            <ArrowIcon
              className="appcode__icon_invert__horizontal"
              height={ICON_SIZE}
              onClick={this.handleForwardClicked}
              onDoubleClick={this.handleForwardClicked}
              width={ICON_SIZE}
              fill={whiteColor}
            />
          </div>
        </div>
        {/* Russian field */}
        <div
          className="appcode__russian"
          onClick={this.handleShowEnglishClicked}
          onDoubleClick={this.handleShowEnglishClicked}
        >
          <div className="appcode__center" key={russian}>
            <div className="appcode__scroll">{russian}</div>
          </div>
        </div>
        {/* English field */}
        <div
          className="appcode__english"
          onClick={e => this.handleTextToSpeachClicked(e, english)}
          onDoubleClick={e =>
            this.handleTextToSpeachClicked(e, english)
          }
        >
          {showEnglish ? (
            <div className="appcode__center">
              <div className="appcode__scroll">
                <div
                  className={
                    "appcode__eng_text_color" +
                    (appcodeIsSpeaking ? " appcode__speaking" : "")
                  }
                >
                  {english}
                </div>
              </div>
            </div>
          ) : (
            <div className="appcode__center" />
          )}
        </div>

        {showAdvanced ? (
          <PopupWindowForAdvancedMenu
            handleClosePopupClicked={this.handleClosePopupClicked}
            handleHideItemClicked={this.handleHideItemClicked}
            handleUnhideAllItemsClicked={
              this.handleUnhideAllItemsClicked
            }
            handleDictClicked={this.handleDictClickedLocal}
            handleShowSetVoicePopupClicked={
              this.handleShowSetVoicePopupClicked
            }
          />
        ) : (
          <div />
        )}

        {showVoicesMenu ? (
          <PopupWindowForVoicesMenu
            voicesArray={this.voicesArray}
            handleClosePopupClicked={this.handleClosePopupClicked}
            handleVoiceDidSelect={this.handleVoiceDidSelect}
            selectedVoiceIndex={this.state.voiceIndex}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default AppCode;
