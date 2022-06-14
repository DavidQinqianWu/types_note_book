// 注意 [T] / [never] 都是把我们的这个变量看做是一个整体, 整体进行比较
type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverRes = IsNever<never>;
