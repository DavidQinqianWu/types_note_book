type DeepPromiseValueType<P extends Promise<unknown>> =
    P extends Promise<infer ValueType>
        ? ValueType extends Promise<unknown>
            ? DeepPromiseValueType<ValueType>
            : ValueType
        : never;

// or
type DeepPromiseValueType2<T> = T extends Promise<
    infer ValueType
>
    ? DeepPromiseValueType2<ValueType>
    : T;

type test = DeepPromiseValueType<
    Promise<Promise<Promise<number>>>
>;

type test2 = DeepPromiseValueType2<
    Promise<Promise<Promise<boolean>>>
>;
