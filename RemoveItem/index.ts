type RemoveItem<
    Arr extends unknown[],
    Item,
    Result extends unknown[] = []
> = Arr extends [infer First, ...infer Rest]
    ? IsEqual<First, Item> extends true
        ? RemoveItem<Rest, Item, Result>
        : RemoveItem<Rest, Item, [...Result, First]>
    : Result;

type RemoveItemResult = RemoveItem<[1, 2, 3, 4], 4>;
