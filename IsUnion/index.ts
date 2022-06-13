// A extends A 这段看似没啥意义，主要是为了触发分布式条件类型，让 A 的每个类型单独传入。

// [B] extends [A] 这样不直接写 B 就可以避免触发分布式条件类型，那么 B 就是整个联合类型。

type IsUnion<A, B = A> = A extends A
    ? [B] extends [A] // 这个是为了防止我们 传入单个类型, 单个类型需要返回false;
        ? false
        : true
    : never;

type IsUnionRes = IsUnion<1 | 2>; //true

// 实例, 这里 [B] extends [A] 的意思, 即B整体这个变量属性是否等于A这个整体
type IsUnionRes2 = IsUnion<1>; // false
