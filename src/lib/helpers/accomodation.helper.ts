import place from '$lib/dummy/accomodations.json';

export const getAll = () => {
	return place;
};

export const getItem = (itemID: string, slug: string) => {
	const id = parseInt(itemID);
	const filtered = place.find((h) => id === h.id && slug === h.slug);
	return filtered;
};
