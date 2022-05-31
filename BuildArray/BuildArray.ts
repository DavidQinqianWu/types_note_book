type BuildArray<
    Length extends number,
    Ele extends unknown,
    Arr extends unknown[] = []
> = Arr["length"] extends Length
    ? Arr
    : BuildArray<Length, Ele, [...Arr, Ele]>;

type BuildArrayTest = BuildArray<3, number>;
