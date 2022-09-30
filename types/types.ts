export interface ICard {
    formaCode: any;
    number: any;
    text: any;
    size: string;
    count: number;
    price?: number;
}

export interface IShop {
    locale: string;
    order: ICard[];
    totalSum: number;
}