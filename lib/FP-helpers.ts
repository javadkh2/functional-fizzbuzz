// its mathematical function f o g = f(g(x))- compose n function to each other and return a function
export const compose = (...func: Function[]) => (args: any) => func.reduceRight((arg, fn) => fn(arg), args)

// curry return a function for treat with a function like a chain of functions with partial input
export const curry = (func: Function) => {
    const chain = (argument: any[]) => (...args: any[]) => {
        let newArgument = [...argument, ...args]
        if (newArgument.length >= func.length) return func(...newArgument);
        return chain(newArgument);
    }
    return chain([]);
}
