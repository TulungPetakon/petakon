export namespace Acc {
	export interface Gallery {
		type: string;
		url: string;
	}

	export interface Accomodation {
		id: number;
		name: string;
		slug: string;
		location: {
			desa: string;
			kecamatan: string;
			address: string;
		};
		gallery?: Gallery[];
	}
}
