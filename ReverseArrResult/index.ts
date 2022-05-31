/**
 * 利用递归我们的逐步的推导出一个数组的逆序
 */

type ReverseArrResult<Arr extends unknown[]> = Arr extends [
    infer First,
    ...infer Rest
]
    ? [...ReverseArrResult<Rest>, First]
    : Arr;

type reverseArrayTest = ReverseArrResult<[1, 2, 3, 4, 5]>;
