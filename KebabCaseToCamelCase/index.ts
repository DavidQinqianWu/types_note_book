/**
 
类型参数 Str 是待处理的字符串类型，约束为 string。

通过模式匹配提取 Str 中 - 分隔的两部分，前面的部分放到 infer 声明的局部变量 Item 里，后面的放到 infer 声明的局部变量 Rest 里。

提取的第一个单词不大写，后面的字符串首字母大写，然后递归的这样处理，然后也就是 `${Item}${KebabCaseToCamelCase<Capitalize>`。

如果模式匹配不满足，就返回 Str。

这样就完成了 KebabCase 到 CamelCase 的转换：
 */

type KebabCaseToCamelCase<Str extends string> = 
    Str extends `${infer Item}-${infer Rest}` 
        ? `${Item}${KebabCaseToCamelCase<Capitalize<Rest>>}`
        : Str;

        type KebabCaseToCamelCaseTest = KebabCaseToCamelCase<'hello-world'>;