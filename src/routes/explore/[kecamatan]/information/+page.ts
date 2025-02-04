import { districtList } from '$lib/helpers/kecamatan.helper.js';
import type { RouteParams } from './$types.js';

const loadPost = async (k: App.District = null) => {
	if (!k) return '';
	try {
		const { default: raw } = await import(`$post/kecamatan/${k}.md?raw`);
		return raw;
	} catch (e) {
		console.error(e);
		return '';
	}
};

export const load = async ({ parent }) => {
	const { district } = await parent();
	const post = await loadPost(district.name);
	return { district, post };
};

export const entries = () => {
	const result = districtList.map((name) => ({ kecamatan: name })) as unknown as RouteParams[];
	return result;
};
