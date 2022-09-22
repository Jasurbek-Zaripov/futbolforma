const prop: any = {
    1: {
        id: 1,
        data: 'page: 1'
    },
    2: {
        id: 2,
        data: 'page: 2'
    },
    3: {
        id: 3,
        data: 'page: 3'
    },
};

export function getProp(id: any) {
    return prop[id];
}
export function getIds() {
    return Object.keys(prop).map(id => ({ params: { id } }));
}