export const compose = (...func: Function[]) => (args: any) => func.reduceRight((arg, fn) => fn(arg), args)
