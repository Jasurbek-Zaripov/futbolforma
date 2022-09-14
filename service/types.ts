export interface ResponseCreateCard {
    jsonrpc: string;
    id: string;
    result: {
        card: {
            number: string;
            expire: string;
            token: string;
            recurrent: boolean;
            verify: boolean;
            type: string;
        };
    };
}
export interface ResponseVerifyCode {
    jsonrpc: string,
    id: string,
    result: {
        sent: boolean,
        phone: string,
        wait: number;
    };
}
export interface ResponseCheckCode {
    jsonrpc: string;
    id: string;
    result: {
        card: {
            number: string,
            expire: string,
            token: string,
            recurrent: Boolean,
            verify: Boolean;
        };
    };
}

export declare module ResponseRecipientCreate {

    interface Discount {
        title: string;
        price: number;
    }

    interface Shipping {
        title: string;
        price: number;
    }

    interface Item {
        title: string;
        price: number;
        count: number;
        code: string;
        units: number;
        vat_percent: number;
        package_code: string;
    }

    interface Detail {
        discount: Discount;
        shipping: Shipping;
        items: Item[];
    }

    interface Account {
        name: string;
        title: string;
        value: string;
        main: boolean;
    }

    interface Epos {
        merchantId: string;
        terminalId: string;
    }

    interface Merchant {
        _id: string;
        name: string;
        organization: string;
        address: string;
        business_id: string;
        epos: Epos;
        date: number;
        logo?: any;
        type: string;
        terms?: any;
    }

    interface Meta {
        source: string;
        owner: string;
    }

    interface Receipt {
        _id: string;
        create_time: number;
        pay_time: number;
        cancel_time: number;
        state: number;
        type: number;
        external: boolean;
        operation: number;
        category?: any;
        error?: any;
        description: string;
        detail: Detail;
        amount: number;
        currency: number;
        commission: number;
        account: Account[];
        card?: any;
        merchant: Merchant;
        meta: Meta;
        processing_id?: any;
    }

    interface Result {
        receipt: Receipt;
    }

    interface RootObject {
        jsonrpc: string;
        id: number;
        result: Result;
    }
}
export declare module ResponseRecipientPay {

    interface Account {
        name: string;
        title: string;
        value: string;
    }

    interface Card {
        number: string;
        expire: string;
    }

    interface Epos {
        merchantId: string;
        terminalId: string;
    }

    interface Merchant {
        _id: string;
        name: string;
        organization: string;
        address: string;
        epos: Epos;
        date: number;
        logo?: any;
        type: string;
        terms?: any;
    }

    interface Receipt {
        _id: string;
        create_time: number;
        pay_time: number;
        cancel_time: number;
        state: number;
        type: number;
        external: boolean;
        operation: number;
        category?: any;
        error?: any;
        description: string;
        detail?: any;
        amount: number;
        commission: number;
        account: Account[];
        card: Card;
        merchant: Merchant;
        meta?: any;
    }

    interface Result {
        receipt: Receipt;
    }

    interface RootObject {
        jsonrpc: string;
        id?: any;
        result: Result;
    }

}

