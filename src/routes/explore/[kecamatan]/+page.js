import { error } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { district } = await parent();
	if (!district) return error(404, { message: 'Not Found' });
};
