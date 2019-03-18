import { compose } from "../lib/FP-helpers"
import { fMap, fValue } from "../lib/functor";
import { convertListToArray, ListFunctor, range } from "../lib/list";

// FizzBuzz function
const fizzBuzz = (n: number) => (n % 3 == 0 ? "Fizz" : "") + (n % 5 == 0 ? "Buzz" : "") || n;

// a mapper that map a functor to fizzBuzz version of it
const fizzBuzzMapper = fMap(fizzBuzz);

// console.log(convertListToArray(fizzBuzzMapper(ListFunctor(range(1, 15))).value()))
const result = compose(convertListToArray, fValue, fizzBuzzMapper, ListFunctor)(range(1, 15));
console.log(result);