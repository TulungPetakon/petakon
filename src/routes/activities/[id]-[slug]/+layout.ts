import { getActivity } from '$lib/helpers/activity.helper';

export const prerender = false;

const getPost = async (slug: string) => {
	if (!slug.startsWith('post')) return '';
	const postName = slug.replace('post-', '');
	const result = await import(`$post/activities/${postName}.md?raw`);
	return result.default;
};

export const load = async ({ params }) => {
	const { id } = params;
	const activity = getActivity(parseInt(id));
	const post = await getPost(activity?.description || '');
	return { activity, post };
};
