import { describe, expect, it } from 'vitest';
import * as E from './index';
import * as Identity from 'fp-ts/lib/Identity';
import * as Maybe from 'fp-ts/lib/Option';

describe("Functor Exercises", function() {

  it('Exercise 1', function() {
    expect(E.ex1(Identity.of(2))).toEqual(Identity.of(3));
  });

  it('Exercise 2', function() {
    var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
    expect(E.ex2(xs)).toEqual(Identity.of('do'));
  });

  it('Exercise 3', function() {
    var user = { id: 2, name: "Albert" };
    expect(E.ex3(user)).toEqual(Maybe.of('A'));
  });

  it('Exercise 4', function() {
    expect(E.ex4("4")).toEqual(Maybe.of(4));
  });

  // it('Exercise 5', function(done){
  //   E.ex5(13).fork(console.log, function(res){
  //     expect(res, 'LOVE THEM FUTURES');
  //     done();
  //   })
  // });

  // it('Exercise 6', function(){
  //   expect(E.ex6({active: false, name: 'Gary'}), Left.of('Your account is not active'));
  //   expect(E.ex6({active: true, name: 'Theresa'}), Right.of('Welcome Theresa'));
  // });

  // it('Exercise 7', function(){
  //   expect(E.ex7("fpguy99"), Right.of("fpguy99"));
  //   expect(E.ex7("..."), Left.of("You need > 3"));
  // });

  // it('Exercise 8', function(){
  //   expect(E.ex8("fpguy99").unsafePerformIO(), "fpguy99-saved");
  //   expect(E.ex8("...").unsafePerformIO(), "You need > 3");
  // });
});
