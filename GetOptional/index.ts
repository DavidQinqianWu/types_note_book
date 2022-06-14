type GetOptional<Obj extends Record<string, any>> = {
    //因为 age 可能为 undefined，也就是索引类型可能是 {}，所以 {} extends Pick<Obj, Key> 就能过滤出可选索引。（可选的意思就是有或者没有，没有的时候就是空的索引类型）
    [Key in keyof Obj as {} extends Pick<Obj, Key>
        ? Key
        : never]: Obj[Key];
};

type GetOptionalResult = GetOptional<{
    name: string;
    age?: number;
}>;
