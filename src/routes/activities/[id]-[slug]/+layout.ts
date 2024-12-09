import { getActivity } from '$lib/helpers/activity.helper';

export const prerender = false;

export const load = async ({ params }) => {
	const { id } = params;
	const activity = getActivity(parseInt(id));
	const post = '';
	return { activity, post };
};
