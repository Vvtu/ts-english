const getVoicesArray = () => new Promise((resolve) => {
	window.speechSynthesis.getVoices();
	setTimeout(function() {
		const voicesArray = window.speechSynthesis
			.getVoices()
			.filter((voice) => voice.lang.startsWith('en-'))
			.sort((a, b) => (a.lang > b.lang ? 1 : -1));
		resolve(voicesArray);
	}, 100);
});

export default getVoicesArray;
