import { getItem } from '$lib/helpers/accomodation.helper.js';

export const prerender = false;

const loadPost = async (k = '') => {
	if (!k) return '';
	try {
		const { default: raw } = await import(`$post/accomodation/${k}.md?raw`);
		return raw;
	} catch (e) {
		console.error(e);
		return '';
	}
};

export const load = async ({ params }) => {
	const { id, name } = params;
	const accomodation = getItem(id, name);
	const post = await loadPost(name);
	return { accomodation, post };
};
