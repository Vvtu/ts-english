import React, { PureComponent, SyntheticEvent } from 'react';

import CancelIcon from './svg/CancelIcon';

import { ANIMATION_INTERVAL } from '../Constants/constants';

const TRANSITION = 'opacity ' + ANIMATION_INTERVAL + 's ease';

type Voice = { name: string; lang: string };

export interface Props {
	selectedVoiceIndex: string | null;
	voicesArray: Voice[];
	handleClosePopupClicked(): void;
	handleVoiceDidSelect(index: string): void;
}

interface State {
	increaseOpacity: boolean;
}

class PopupWindowForVoicesMenu extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { increaseOpacity: false };
	}

	componentDidMount() {
		requestAnimationFrame(() => {
			this.setState({ increaseOpacity: true });
		});
	}

	menuRow = (voice: Voice, index: string) =>
		voice.lang || voice.name ? (
			<div
				key={voice.name}
				className={
					'popup__row' +
					(this.props.selectedVoiceIndex === index
						? ' popup__row_selected'
						: '')
				}
				onClick={() => this.props.handleVoiceDidSelect(index)}
				onDoubleClick={() => this.props.handleVoiceDidSelect(index)}
			>
				{/* <menuItem.Icon {...menuItem.props} /> */}
				<div className="popup__gap" />
				<div>{voice.lang + ' - ' + voice.name}</div>
			</div>
		) : null;

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
		//	const greenColor = String(styles.getPropertyValue('--english-text-color')).trim();
		//	const redColor = String(styles.getPropertyValue('--danger-color')).trim();
		const whiteColor = String(
			styles.getPropertyValue('--base-text-color'),
		).trim();
		//  const blackColor = String(styles.getPropertyValue('--background-color')).trim();

		const { voicesArray, handleClosePopupClicked } = this.props;

		// console.log('PopupWindowForVoicesMenu = ', this.props);

		return (
			<div
				style={{
					opacity: this.state.increaseOpacity === true ? 1 : 0,
					transition: TRANSITION,
				}}
				onClick={(e) =>
					this.handleClicked(e, handleClosePopupClicked)}
				onDoubleClick={(e) =>
					this.handleClicked(e, handleClosePopupClicked)}
			>
				<div className="popup__full_screen_div_opacity" />
				<div className="popup__full_screen_div">
					<div className="popup__window popup__scroll">
						<div className="popup__cancel">
							<CancelIcon
								fill={whiteColor}
								height={16}
								onClick={(e: SyntheticEvent) =>
									this.handleClicked(e, handleClosePopupClicked)}
								onDoubleClick={(e: SyntheticEvent) =>
									this.handleClicked(e, handleClosePopupClicked)}
								width={16}
							/>
						</div>
						<div className="popup__list">
							{voicesArray.map((voice: Voice, index: number) =>
								this.menuRow(voice, String(index)),
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PopupWindowForVoicesMenu;
