import { marked } from 'marked';

interface TOC {
	slug: string;
	depth: number;
	text: string;
}

export const md = (markdown: string) => {
	const txt = markdown.replaceAll('Tulungagung', '<ins>Tulungagung</ins>');
	const toc: TOC[] = [];
	const renderer = new marked.Renderer();
	renderer.heading = ({ text, depth, raw }) => {
		const parsed = raw.toLowerCase().replace(/[^\w]+/g, ' ');
		const slug = parsed.trim().replaceAll(' ', '-');
		toc.push({ slug, depth, text });
		return '<h' + depth + ' id="' + slug + '">' + text + '</h' + depth + '>\n';
	};

	const result = {
		toc,
		html: marked(txt, { renderer })
	};
	return result;
};
