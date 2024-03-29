import { curry } from "./FP-helpers";

export type Imap = (item: any) => any;


export interface IFunctor {
    map: (f: Imap) => IFunctor,
    value: any;
}

// inspect function get a map function and  a value and perform map on item for hide complexity of run an map on a item with special type
// for instance: performing map on a list need iterate list so iterate hidden in inspect method
export type Iinspect = (map: Imap) => (item: any) => any;

export const createFunctor = curry((inspect: Iinspect, $value: any): IFunctor => ({
    map: (f: Imap) => createFunctor(inspect, inspect(f)($value)),
    value: () => $value,
}))


export const fMap = curry((f: Imap, functor: IFunctor) => functor.map(f))
export const fValue = (f: IFunctor) => f.value();




