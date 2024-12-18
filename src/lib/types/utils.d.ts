export namespace Utils {
	export interface ScrollControlParam {
		/** Reset Scroll Postiton after navigation (not smooth) */
		reset?: boolean;
		/** Target Position */
		scrollTo?: number;
		/** Instant Scroll without waiting navigation */
		instant?: boolean;
		/** Smooth Scroll Duration */
		duration?: number;
	}
	export type scrollControl = (params: ScrollControlParam) => void;
}
