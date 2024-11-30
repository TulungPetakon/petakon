export namespace Utils {
	export interface ScrollControlParam {
		reset?: boolean;
		scrollTo?: number;
		instant?: false;
	}
	export type scrollControl = (params: ScrollControlParam) => void;
}
