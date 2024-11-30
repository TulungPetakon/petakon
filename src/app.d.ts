// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		declare module '*&img' {
			const value: string;
			export default value;
		}

		type District =
			| 'ngantru'
			| 'sendang'
			| 'pakel'
			| 'sumbergempol'
			| 'kalidawir'
			| 'kauman'
			| 'pagerwojo'
			| 'besuki'
			| 'rejotangan'
			| 'ngunut'
			| 'karangrejo'
			| 'kedungwaru'
			| 'tulungagung'
			| 'boyolangu'
			| 'campurdarat'
			| 'bandung'
			| 'tanggunggunung'
			| 'pucanglaban'
			| 'gondang'
			| null;
	}
}

export {};
