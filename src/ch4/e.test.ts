import * as E from "./e";
import { describe, expect, it, test } from "vitest";

test("Exercise 1a", () => {
	expect(
		E.sentences(["Jingle bells Batman smells", "Robin laid an egg"]),
	).toEqual([
		["Jingle", "bells", "Batman", "smells"],
		["Robin", "laid", "an", "egg"],
	]);
});

test("Exercise 2", () => {
	expect(E.filterQs(["quick", "camels", "quarry", "over", "quails"])).toEqual([
		"quick",
		"quarry",
		"quails",
	]);
});

test("Exercise 3", function() {
	expect(E.max([323, 523, 554, 123, 5234])).toEqual(5234);
});

it('Curry Bonus 1', function() {
	expect(E.slice(1)(3)(['a', 'b', 'c']),).toEqual(['b', 'c']);
});

it('Curry Bonus 2', function() {
	expect(E.take(2)(['a', 'b', 'c']),).toEqual(['a', 'b']);
});

