type UppercaseKey<Obj extends object> = {
    [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key];
};

type test = UppercaseKey<{ name: 'wqq' }>;
