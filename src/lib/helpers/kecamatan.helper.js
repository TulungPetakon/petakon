import kecamatan from '$lib/dummy/kecamatan.json';

export const districtList = kecamatan.map(({ name }) => name);
export const isDistrictValid = (location) => {
	const isValid = districtList.includes(location);
	return isValid;
};
