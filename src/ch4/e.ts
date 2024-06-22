import * as _ from "ramda";
// 练习 1a
//==============
// 使用 `map` 创建一个新的 `sentences` 函数，使之能够操作字符串数组
export function sentences(str: string[]): string[][] {
	return _.map(split)(str);
}

function split(str: string) {
	return str.split(" ");
}
