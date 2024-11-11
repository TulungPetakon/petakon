import kecamatan from '$lib/dummy/kecamatan.json';

export const isDistrictValid = (location) => {
	const list = kecamatan.map(({ name }) => name);
	const isValid = list.includes(location);
	return isValid;
};
