import { isDistrictValid } from '$lib/helpers/kecamatan.helper.js';
import { error, redirect, type Load } from '@sveltejs/kit';

export const prerender = false;

export const load: Load = ({ params, }) => {
	const district =  params.district as App.District
	const isValid = isDistrictValid(district);
	if (!isValid) return error(404, { message: 'Not Found' });
	redirect(302, `/explore/${district}/information`);
};
