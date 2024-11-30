import { getAll } from '$lib/helpers/accomodation.helper';

export const load = () => {
	return { accomodation: getAll() };
};
