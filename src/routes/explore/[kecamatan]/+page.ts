import { error } from '@sveltejs/kit';

import { building } from '$app/environment';
import { listActivities } from '$lib/helpers/activity.helper';

export const load = async ({ parent, url }) => {
	const { district } = await parent();
	if (!district?.name) return error(404, { message: 'Not Found' });

	const p = building ? '1' : url.searchParams.get('p');
	const pageNumber = parseInt(p ?? '1');
	const page = !isNaN(pageNumber) ? pageNumber : 1;

	const destinations = await listActivities({
		district: district.name,
		limit: 12,
		page
	});

	return { destinations, district };
};
