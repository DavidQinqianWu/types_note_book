/**
 * 理解:
 * 利用递归的方式, 将字符串转换为一个Union类型
 * infer拿到First类型, infer拿到Rest类型
 * 如果不能符合 ${First}${Rest} 类型,那么返回never
 */
type StringToUnion<Str extends string> =
    Str extends `${infer First}${infer Rest}`
        ? First | StringToUnion<Rest>
        : never;

type StringToUnionTest = StringToUnion<"woqunali">;
