import { isDistrictValid } from '$lib/helpers/kecamatan.helper.js';
import { error, redirect } from '@sveltejs/kit';

export const prerender = false;

export const load = ({ params }) => {
	const isValid = isDistrictValid(params.district);
	if (!isValid) return error(404, { message: 'Not Found' });
	redirect(302, `/explore/${params.district}`);
};
