export namespace PKMap {
	export interface Location {
		0;
	}
	interface MapToggleParam {
		location: Location;
		action?: 'open' | 'close' | undefined;
	}
	export type Toggle = (param?: MapToggleParam) => void;
}
