import React, { PureComponent, SyntheticEvent } from "react";

import CancelIcon from "./svg/CancelIcon";
import ClearAllInfo from "./svg/ClearAllInfo";

import {
  ANIMATION_INTERVAL,
  ICON_SIZE
} from "../Constants/constants";

const TRANSITION = "opacity " + ANIMATION_INTERVAL + "s ease";

const noop = () => {};

export interface Props {
  handleHideItemClicked(): void;
  handleUnhideAllItemsClicked(): void;
  handleDictClicked(number: number): void;
  handleClosePopupClicked(): void;
  handleShowSetVoicePopupClicked(): void;

  // selectedVoiceIndex: string | null;
  // voicesArray: Voice[];
  // handleClosePopupClicked(): void;
  // handleVoiceDidSelect(index: string): void;
}

interface State {
  increaseOpacity: boolean;
}

class PopupWindowForAdvancedMenu extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { increaseOpacity: false };
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ increaseOpacity: true });
    });
  }

  menuRow = ({
    Icon,
    label,
    menuProps,
    handleClickedFunc
  }: {
    Icon: any;
    label: string;
    menuProps:
      | {
          height: string;
          width: string;
          fill: string;
        }
      | {};
    handleClickedFunc(): void;
  }) => (
    <div
      className="popup__row"
      onClick={(e: SyntheticEvent) =>
        this.handleClicked(e, handleClickedFunc)
      }
      onDoubleClick={(e: SyntheticEvent) =>
        this.handleClicked(e, handleClickedFunc)
      }
    >
      <Icon {...menuProps} />
      <div className="popup__gap" />
      <div>{label}</div>
    </div>
  );

  handleClicked = (e: SyntheticEvent, func: () => void) => {
    e.stopPropagation();
    this.setState({ increaseOpacity: false });
    setTimeout(() => {
      func();
    }, ANIMATION_INTERVAL * 1000);
    return false;
  };

  render() {
    const styles = getComputedStyle(document.documentElement);
    const greenColor = String(
      styles.getPropertyValue("--english-text-color")
    ).trim();
    const redColor = String(
      styles.getPropertyValue("--danger-color")
    ).trim();
    const whiteColor = String(
      styles.getPropertyValue("--base-text-color")
    ).trim();
    const blackColor = String(
      styles.getPropertyValue("--background-color")
    ).trim();

    const {
      handleHideItemClicked,
      handleUnhideAllItemsClicked,
      handleDictClicked,
      handleClosePopupClicked,
      handleShowSetVoicePopupClicked
    } = this.props;

    // console.log('this.state.increaseOpacity = ', this.state.increaseOpacity);

    return (
      <div
        style={{
          opacity: this.state.increaseOpacity === true ? 1 : 0,
          transition: TRANSITION
        }}
        onClick={(e: SyntheticEvent) =>
          this.handleClicked(e, handleClosePopupClicked)
        }
        onDoubleClick={(e: SyntheticEvent) =>
          this.handleClicked(e, handleClosePopupClicked)
        }
      >
        <div className="popup__full_screen_div_opacity" />
        <div className="popup__full_screen_div">
          <div className="popup__window">
            <div className="popup__cancel">
              <CancelIcon
                fill={whiteColor}
                height={16}
                onClick={(e: SyntheticEvent) =>
                  this.handleClicked(e, handleClosePopupClicked)
                }
                onDoubleClick={(e: SyntheticEvent) =>
                  this.handleClicked(e, handleClosePopupClicked)
                }
                width={16}
              />
            </div>
            <div className="popup__list">
              {this.menuRow({
                label: "Advanced:",
                Icon: CancelIcon,
                menuProps: {
                  height: ICON_SIZE,
                  width: ICON_SIZE,
                  fill: blackColor
                },
                handleClickedFunc: noop
              })}

              {this.menuRow({
                label: "hide this item",
                Icon: CancelIcon,
                menuProps: {
                  height: ICON_SIZE,
                  width: ICON_SIZE,
                  fill: redColor
                },
                handleClickedFunc: handleHideItemClicked
              })}

              {this.menuRow({
                label: "reset all info",
                Icon: ClearAllInfo,
                menuProps: {
                  height: ICON_SIZE,
                  width: ICON_SIZE,
                  fill: greenColor
                },
                handleClickedFunc: handleUnhideAllItemsClicked
              })}

              {this.menuRow({
                label: "dict #1",
                Icon: () => (
                  <div
                    style={{ width: ICON_SIZE, color: greenColor }}
                  >
                    D1
                  </div>
                ),
                menuProps: {},
                handleClickedFunc: () => handleDictClicked(1)
              })}

              {this.menuRow({
                label: "dict #2",
                Icon: () => (
                  <div
                    style={{ width: ICON_SIZE, color: greenColor }}
                  >
                    D2
                  </div>
                ),
                menuProps: {},
                handleClickedFunc: () => handleDictClicked(2)
              })}
              {this.menuRow({
                label: "set voice",
                Icon: () => (
                  <div
                    style={{ width: ICON_SIZE, color: greenColor }}
                  >
                    D2
                  </div>
                ),
                menuProps: {},
                handleClickedFunc: () =>
                  handleShowSetVoicePopupClicked()
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupWindowForAdvancedMenu;
