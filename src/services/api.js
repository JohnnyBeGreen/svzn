class BaseApiService {
    baseUrl = process.env.VUE_APP_BASE_URL;
    resource;

    constructor(resource) {
        if (!resource) throw new Error("Данных нет");
        this.resource = resource;
    }

    getUrl() {
        return `${this.baseUrl}${this.resource}`;
    }

    handleErrors(err) {
        console.log({ message: "Ошибка", err });
    }
}

class GetApiService extends BaseApiService {
    constructor(resource) {
        super(resource);
    }
    
    async fetch() {
        try {
            const response = await fetch(this.getUrl());
            return await response.json();
        } catch (err) {
            this.handleErrors(err);
        }
    }
}

class ProductsApiService extends GetApiService {
    constructor() {
        super('products.json');
    }
}

class PaymentsApiService extends GetApiService {
    constructor() {
        super('payments.json');
    }
}

export const $api = {
    products: new ProductsApiService(),
    payments: new PaymentsApiService()
};