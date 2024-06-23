import * as A from 'fp-ts/Array';
import * as R from 'ramda';
import { pipe } from "fp-ts/lib/function";
import * as O from 'fp-ts/Option';
import * as I from 'fp-ts/lib/Identity';

export const ex1 = I.map((n: number) => ++n);

export const ex2 = I.map(R.head);

type User = {
  id: number;
  name?: string;
};

export const ex3 = (user: User) => pipe(
  user,
  (u) => O.of(u?.name),
  O.map((n?: string) => n?.['0'])
);

export const ex4 = (s: string) => pipe(s, O.of, O.map(parseInt));
