/**
 *  详解: (利用特性: 索引签名不能构造成字符串字面量类型，因为它没有名字，而其他索引可以。)
 *  1. 通过映射类型语法构造新的索引类型，索引是之前的索引 Key in keyof Obj，但要做一些过滤，也就是 as 之后的部分。
 *  2. 如果索引是字符串字面量类型，那么就保留，否则返回 never，代表过滤掉。
 *  3. 值保持不变，也就是 Obj[Key],这样就可以过滤掉可索引签名
 */

type RemoveIndexSignature<Obj extends Record<string, any>> =
    {
        [Key in keyof Obj as Key extends `${infer Str}`
            ? Str
            : never]: Obj[Key];
    };

// 测试case:
type RemoveIndexSignatureResult = RemoveIndexSignature<{
    [_: string]: any;
    sleep(): void;
}>;
