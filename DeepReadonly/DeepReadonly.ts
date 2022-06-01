/**
 * 分析:
 * 1. 先看Obj是否是有效的
 * 2. Obj里面的所有的Key都添加readonly
 * 3. 看value(Obj[Key])是否是obj
 * 4. 如果不是obj,则直接返回value(Obj[Key])
 * 5. 如果是obj, 则进一步查看是否是Function
 * 6. 如果是 Function 则不加递归
 * 7. 如果不是 Function, 那么必是object类型的,所以可以继续 DeepReadonly 调用
 */

type DeepReadonly<Obj extends Record<string, any>> =
    Obj extends any //因为 ts 只有类型被用到的时候才会做类型计算。
        ? // 因此我们 Obj extends any 等，让它触发计算：
          {
              readonly [Key in keyof Obj]: Obj[Key] extends object
                  ? Obj[Key] extends Function
                      ? Obj[Key]
                      : DeepReadonly<Obj[Key]>
                  : Obj[Key];
          }
        : never;

type obj = {
    a: {
        b: {
            c: {
                f: () => "dong";
                d: {
                    e: {
                        guang: string;
                    };
                };
            };
        };
    };
};

type DeepReadonlyTest = DeepReadonly<obj>;
