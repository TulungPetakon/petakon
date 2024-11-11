import { building } from '$app/environment';
import { isDistrictValid } from '$lib/helpers/kecamatan.helper.js';

export const load = ({ params, url }) => {
	const districtFromQuery = building ? '' : url.searchParams.get('l');
	const district = params.kecamatan || districtFromQuery;
	const source = params.kecamatan ? 'param' : 'search';
	const isValid = isDistrictValid(district);
	return { district: { name: isValid ? district : null, source } };
};
