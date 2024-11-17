const hotels = [
	{
		id: 1001,
		name: 'Front One Hotel Tulungangung',
		slug: 'front-one',
		location: {
			desa: 'Kenayan',
			kecamatan: 'Tulungagung'
		}
	},
	{
		id: 1002,
		name: 'Ilio Guest House Tulungagung',
		slug: 'ilio',
		location: {
			desa: 'Kepatihan',
			kecamatan: 'Tulungagung'
		}
	},
	{
		id: 1003,
		name: 'Hotel Surakarta',
		slug: 'hotel-surakarta',
		location: {
			desa: 'Kenayan',
			kecamatan: 'Tulungagung'
		}
	}
];

export const load = () => {
	return { hotels };
};
