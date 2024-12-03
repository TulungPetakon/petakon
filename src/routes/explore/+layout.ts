import { building } from '$app/environment';
import { isDistrictValid } from '$lib/helpers/kecamatan.helper';

export const prerender = false;

export const load = ({ params, url }) => {
	const districtFromQuery = building ? '' : url.searchParams.get('l');
	const district = (params.kecamatan || districtFromQuery) as App.District;
	const source: 'param' | 'search' = params.kecamatan ? 'param' : 'search';
	const isValid = isDistrictValid(district);
	return { district: { name: isValid ? district : null, source } };
};
