type AppendArgument <Func extends Function, Arg> = Func extends (...args: infer Args) => infer ReturnType 
? (...args: [...Args, Arg]) => ReturnType : never;

// 1. 首先定义一个 Func 是一个方法，Arg 是一个参数类型
// 2. 看看Func是否等于 一个方法(设为 A), 并通过infer 来获取A方法的参数 args 的类型 Args, 通过infer 来获取A方法的返回值 ReturnType
// 3. 如果满足 A 方法类型, 那么就返回一个函数，这个函数的参数是 [...Args, Arg]，返回值是 ReturnType
// 4. 如果不满足 A 方法类型, 那么就返回 never 类型
