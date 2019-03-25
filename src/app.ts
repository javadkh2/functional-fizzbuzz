import { compose } from "../lib/FP-helpers"
import { fMap, fValue } from "../lib/functor";
import { convertListToArray, ListFunctor, range, pairMap } from "../lib/list";

// FizzBuzz function
const fizzBuzz = (n: number) => (n % 3 == 0 ? "Fizz" : "") + (n % 5 == 0 ? "Buzz" : "") || n;

function simple() {

    const fizzBuzzMapper = pairMap(fizzBuzz);

    const result = compose(convertListToArray, fizzBuzzMapper)(range(1, 15));

    console.log(result);
}

function usingFunctor() {
    // a mapper that map a functor to fizzBuzz version of it
    const fizzBuzzMapper = fMap(fizzBuzz);

    const result = compose(convertListToArray, fValue, fizzBuzzMapper, ListFunctor)(range(1, 15));

    console.log(result);
}

simple()

