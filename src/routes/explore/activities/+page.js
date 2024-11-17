import { building } from '$app/environment';
import { listActivities } from '$lib/helpers/activity.helper.js';

export const load = async ({ parent, url }) => {
	const p = building ? '1' : url.searchParams.get('p');
	const pageNumber = parseInt(p);
	const page = !isNaN(pageNumber) ? pageNumber : 1;
	const { district } = await parent();
	const destinations = await listActivities({
		district: district.name,
		limit: 12,
		page
	});

	return { destinations };
};
