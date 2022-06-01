type ReverseStr<
    Str = string,
    Result extends string = ""
> = Str extends `${infer First}${infer Rest}`
    ? ReverseStr<Rest, `${First}${Result}`>
    : Result;

type ReverseStrTest = ReverseStr<"hello world">;
