type isRequired<
    Key extends keyof Obj,
    Obj
> = {} extends Pick<Obj, Key> ? never : Key;

type GetRequired<Obj extends Record<string, any>> = {
    [Key in keyof Obj as isRequired<Key, Obj>]: Obj[Key];
};

type GetRequiredResult = GetRequired<{
    name: string;
    age?: number;
}>;
