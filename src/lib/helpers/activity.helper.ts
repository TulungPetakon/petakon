import activities from '$lib/dummy/destinations.json';

const paging = (list: unknown[] = [], limit: number, page: number) => {
	const start = (page - 1) * limit;
	const end = limit * page;
	const filterLimit = list.filter((v, i) => i < end && i >= start);

	const isEnd = end >= list.length;
	const result = { list: filterLimit, isEnd, page, total: list.length };
	return result;
};

interface ActivitiesParam {
	district: App.District;
	limit: number;
	page: number;
}
export const listActivities = ({ district, limit = 12, page = 1 }: ActivitiesParam) => {
	if (!district) return paging(activities, limit, page);
	const filtered = activities.filter(({ address }) => {
		const target = address.match(new RegExp(district, 'i'));
		return target;
	});
	return paging(filtered, limit, page);
};
