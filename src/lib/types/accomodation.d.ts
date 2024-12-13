import type { Glob } from './global';

export namespace Acc {
	export interface Accomodation {
		id: number;
		name: string;
		slug: string;
		location: {
			desa: string;
			kecamatan: string;
			address: string;
		};
		gallery?: Glob.Gallery[];
	}
}
