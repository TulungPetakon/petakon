import { building } from '$app/environment';
import { listActivities } from '$lib/helpers/activity.helper';

export const load = async ({ parent, url }) => {
	const p: string | null = building ? '1' : url.searchParams.get('p');
	const pageNumber = parseInt(p ?? '1');
	const page = !isNaN(pageNumber) ? pageNumber : 1;
	const { district } = await parent();
	const destinations = await listActivities({
		district: district.name,
		limit: 12,
		page
	});

	return { destinations };
};
