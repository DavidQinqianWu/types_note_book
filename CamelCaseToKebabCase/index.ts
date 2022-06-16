/**
 * 类型参数 Str 为待处理的字符串类型。

通过模式匹配提取首个字符到 infer 声明的局部变量 First，剩下的放到 Rest。

判断下当前字符是否是小写，如果是的话就不需要转换，递归处理后续字符，也就是 `${First}${CamelCaseToKebabCase}`。

如果是大写，那就找到了要分割的地方，转为 - 分割的形式，然后把 First 小写，后面的字符串递归的处理，也就是 `-${Lowercase}${CamelCaseToKebabCase}`。

如果模式匹配不满足，就返回 Str。

这样就完成了 CamelCase 到 KebabCase 的转换：
 */

type CamelCaseToKebabCase<Str extends string> =
    // 1. 把 Str 分成 First 和 Rest 两个部分
    Str extends `${infer First}${infer Rest}`
        ? First extends Lowercase<First> // 查看First是否全是小写
            ? `${First}${CamelCaseToKebabCase<Rest>}` // 如果是拿出来是小写的话, 然后继续递归Rest
            : // 否则就是无法继续递归下去
              `-${Lowercase<First>}${CamelCaseToKebabCase<Rest>}`
        : Str;

type CamelCaseToKebabCaseTest =
    CamelCaseToKebabCase<"camelCaseToKebabCase">;
