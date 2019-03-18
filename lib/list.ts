import { Imap, Functor } from "./Functor";

// base structure for handling list structure first element is a normal value and second is another pair
export interface IPair { first: any, second: IPair }

export const pair = (first: any, second: IPair): IPair => ({ first, second });

// return first element in a pair
export const fst = (p: IPair): any => p.first || null;

// return second element in a pair
export const snd = (p: IPair): IPair => p.second || null;

// return a range list from start to end
export const range = (start: number = 0, end: number = 0): IPair => start > end ? null as unknown as IPair : pair(start, range(start + 1, end))

// get a map function then a list and return a new list with exec map on all elements in the list.
export const pairMap = (map: Imap) => (list: IPair): IPair => list ? pair(map(fst(list)), pairMap(map)(snd(list))) : null as unknown as IPair;

// a helper for convert list to array
export const convertListToArray = (list: IPair): Array<any> => list ? [fst(list), ...convertListToArray(snd(list))] : [];

// a helper for convert array to list
export const convertArrayToList = (ar: Array<any>): IPair => ar && ar.length ? pair(ar[0], ar.shift()) : null as unknown as IPair;

// get a list and return a functor for the list
export const ListFunctor = Functor(pairMap);