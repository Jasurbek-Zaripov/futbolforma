import { v4 } from "uuid";

(process as any).store = new Map();
function get(id: string) {
    return (process as any).store.get(id);
}

function create(body: any): string {
    const id = body.id || v4(); // order id
    const data = (process as any).store.get(id) || {};// order

    data[v4()] = body.data;
    (process as any).store.set(id, data);
    return id;
}

export {
    create,
    get
};