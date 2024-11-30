import kecamatan from '$lib/dummy/kecamatan.json';

export const districtList = kecamatan.map(({ name }) => name) as App.District[];

export const isDistrictValid = (location: App.District) => {
	const isValid = districtList.includes(location);
	return isValid;
};
