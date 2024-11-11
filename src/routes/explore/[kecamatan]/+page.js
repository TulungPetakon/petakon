import { districtList } from '$lib/helpers/kecamatan.helper.js';
import { error } from '@sveltejs/kit';

export const entries = () => {
	return districtList.map((kecamatan) => ({ kecamatan }));
};

export const load = async ({ parent }) => {
	const { district } = await parent();
	if (!district) return error(404, { message: 'Not Found' });
};
