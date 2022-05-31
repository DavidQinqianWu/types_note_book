type DropSubStr <Str extends string, SubStr extends string> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`? DropSubStr<`${Prefix}${Suffix}`, SubStr> :Str;
// Str是我们的Source，SubStr是我们要去掉的字符串
// 1. 首先看Str是否能够分割成 Prefix, SubStr, Suffix
// 2. 如果能够分割，那么就把SubStr去掉，然后再次调用DropSubStr，这样就可以递归调用
// 3. 如果不能分割，那么就返回Str
type DropResult = DropSubStr<'wqq', 'q'>;