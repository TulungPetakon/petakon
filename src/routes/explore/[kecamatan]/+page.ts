import { error } from '@sveltejs/kit';

import { building } from '$app/environment';
import { listActivities } from '$lib/helpers/activity.helper';
import { districtList } from '$lib/helpers/kecamatan.helper.js';
import type { RouteParams } from './$types.js';

export const entries = () => {
	const result = districtList.map((name) => ({ kecamatan: name })) as unknown as RouteParams[];
	return result;
};

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
