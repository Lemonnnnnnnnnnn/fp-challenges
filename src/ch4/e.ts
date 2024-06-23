import { number } from "fp-ts";
import { map, sort } from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";
import { partitionMapWithIndex } from "fp-ts/lib/Map";
import { filter } from "fp-ts/lib/Option";
import { fromCompare, Ord, contramap, ordNumber, reverse } from "fp-ts/lib/Ord";
import * as R from "ramda";

export function sentences (str: string[]): string[][] {
	return R.map(R.split(" "), str);
}

export function filterQs (arg0: string[]): any {
	return R.filter((item) => /^q.+$/.test(item), arg0);
}
export function max (arg0: number[]) {
	return R.pipe(
		R.sort<number>((a, b) => b - a),
		R.head,
	)(arg0);
}
export const slice = R.curry(function(start: number, end: number, arr: string[]) {
	return R.slice(start, end, arr);
});

export const take = R.curry(function(step: number, arr: string[]) {
	return slice(0, step, arr);
});

export type CarType = {
	name: string;
	horsepower: number;
	dollar_value: number;
	in_stock: boolean;
};
export const CARS: CarType[] = [
	{ name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
	{ name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false },
	{ name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false },
	{ name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
	{ name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true },
	{ name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false }
];

export function isLastInStock (CARS: CarType[]): any {
	return pipe(CARS, (a) => a[a.length - 1], R.prop('in_stock'));
}

export function nameOfFirstCar (CARS: CarType[]): any {
	return pipe(CARS, (a) => a[0], R.prop('name'));
}

export function averageDollarValue (CARS: CarType[]): any {
	return pipe(CARS, map(R.prop('dollar_value')), R.mean);
}

export function sanitizeNames (CARS: CarType[]): any {
	return pipe(CARS, map(R.prop('name')), map(R.toLower), map(R.replace(/[ -]/g, '_')));
}

// bonus 1

export function availablePrices (CARS: CarType[]): any {
	return pipe(
		CARS,
		(cars) => cars.filter(car => car.in_stock),
		map((car) => car.dollar_value),
		map((dollar_value) => {
			let format = '.00';
			let ds = String(dollar_value);
			let j = 0;
			for (let i = ds.length - 1; i >= 0; i--) {
				j++;
				let letter = ds[i];
				if (j % 3 === 0 && i !== 0) {
					j = 0;
					letter = ',' + letter;
				}
				format = letter + format;
			}
			return format;
		}),
		map(d => `$${d}`), (formated_dollars) => formated_dollars.join(', '));
}

// bonus 2

const ordHorsePower: Ord<number> = reverse(number.Ord);

const ordByHorsePower: Ord<CarType> = pipe(ordHorsePower, contramap(car => car.dollar_value));

export function fastestCar (CARS: CarType[]): any {
	return pipe(CARS, sort(ordByHorsePower), (list) => list['0'], R.prop('name'), (name) => `${name} is the fastest`);
}

