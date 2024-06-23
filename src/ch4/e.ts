import * as R from "ramda";

export function sentences(str: string[]): string[][] {
	return R.map(R.split(" "), str);
}

export function filterQs(arg0: string[]): any {
	return R.filter((item) => /^q.+$/.test(item), arg0);
}
export function max(arg0: number[]) {
	return R.pipe(
		R.sort<number>((a, b) => b - a),
		R.head,
	)(arg0);
}
