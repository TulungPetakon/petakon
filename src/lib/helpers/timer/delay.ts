const delay = async (time: number) => {
	return new Promise((resolve) => {
		const t = setTimeout(() => {
			resolve(true);
			clearTimeout(t);
		}, time);
	});
};

export default delay;
