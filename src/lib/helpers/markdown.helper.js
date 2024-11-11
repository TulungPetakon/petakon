import { marked } from 'marked';

export const md = (markdown) => {
	const txt = markdown.replaceAll('Tulungagung', '<ins>Tulungagung</ins>');
	const toc = [];
	const renderer = new marked.Renderer();
	renderer.heading = ({ text, depth, raw }) => {
		const parsed = raw.toLowerCase().replace(/[^\w]+/g, ' ');
		const slug = parsed.trim('').replaceAll(' ', '-');
		toc.push({ slug, depth, text });
		return '<h' + depth + ' id="' + slug + '">' + text + '</h' + depth + '>\n';
	};

	const result = {
		toc,
		html: marked(txt, { renderer })
	};
	return result;
};
