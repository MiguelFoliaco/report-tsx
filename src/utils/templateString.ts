export const templateString = (
    text: string,
    params: Record<string, boolean | number | string | null | object>
) => {
    let _text = text.concat();
    const expReg = /\${(.*?)}/g;
    let val = _text.match(expReg) as string[];
    const valSet = new Set(val);
    val = Array.from(valSet);
    val.forEach((e) => {
        const key = e.replace("${", "").replace("}", "");
        _text = _text.replaceAll(e, String(params[key]  ?? ""));
    });

    return _text;
};