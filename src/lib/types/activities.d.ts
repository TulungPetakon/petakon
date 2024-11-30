export namespace Activities {
	export interface Item {
		id: number | string;
		name: string;
		address: string;
		description: string;
		rating: number | string;
		category: string;
		slug: string;
	}

	export interface PaginationList {
		list: Item[];
		isEnd: boolean;
		page: number;
		total: number;
	}
}
