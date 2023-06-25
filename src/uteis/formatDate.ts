export const formatDate = (date: Date, format: string) => {
    const map: { [key: string]: string } = {
        mm:
            date.getMonth().toString().length < 2
                ? "0" + (date.getMonth() + 1)
                : date.getMonth().toString(),
        dd:
            date.getDate().toString().length < 2
                ? "0" + date.getDate()
                : date.getDate().toString(),
        aaaa: date.getFullYear().toString(),
    };

    return format.replace(/mm|dd|aaaa/gi, (matched: string) => map[matched]);
};

export const formatHour = (date: Date, format: string) => {
    const map: { [key: string]: string } = {
        hh:
            date.getHours().toString().length < 2
                ? "0" + date.getHours().toString()
                : date.getHours().toString(),
        mm:
            date.getMinutes().toString().length < 2
                ? "0" + date.getMinutes().toString()
                : date.getMinutes().toString(),
    };

    return format.replace(/hh|mm/gi, (matched: string) => map[matched]);
};
