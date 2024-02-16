interface IAion {
    id: number,
    name: string,
    evaluation: {
        content: string,
        author: string
    },
    relation: {
        good: number,
        bad: number
    }
}

export const getAionById = async (id: number, locale: string) => {
    return await fetch(`/aions-${locale}.json`).then(res => res.json()).then((res: IAion[]) => res.find((item: IAion) => item.id === id));
}