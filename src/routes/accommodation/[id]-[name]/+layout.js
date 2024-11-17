export const prerender = false;

const loadPost = async (k = '') => {
	if (!k) return '';
	try {
		const { default: raw } = await import(`$post/accomodation/front-one.md?raw`);
		return raw;
	} catch (e) {
		console.error(e);
		return '';
	}
};

export const load = async () => {
	const post = await loadPost('front-one');
	return { accomodation: { name: 'Front Hotel Tulungagung' }, post };
};
