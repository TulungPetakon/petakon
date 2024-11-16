export const prerender = false;

export const load = ({ params }) => {
	console.log(params.id, params.name);
};
