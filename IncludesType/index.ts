/**
 * 用来检查Type里面是否包含我们的target type
 */

type Includes<
    Arr extends unknown[],
    FindItem
> = Arr extends [infer First, ...infer Rest]
    ? IsEqual<First, FindItem> extends true
        ? true
        : Includes<Rest, FindItem>
    : false;

type IsEqual<A, B> = (A extends B ? true : false) &
    (B extends A ? true : false);

type testIsEqual = IsEqual<number, string>;

type IncludeResult = Includes<[1, 2, 3, 4, 5], 5>;
type NonIncludeResult = Includes<[1, 2, 3, 4, 5], 6>;
