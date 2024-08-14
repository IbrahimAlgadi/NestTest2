export interface ProductDetails {
    pertNumber?: string;
    dimension?: string;
    weight?: number;
    manufacturer?: string;
    origin?: string;
}

export interface Product {
    id: number;
    name: string;
    qty: number;
    price: number;
    productDetails?: ProductDetails
}


export interface UpdateProduct {
    name?: string;
    qty?: number;
    price?: number;
    // Product Details
    partNumber?: string;
    dimension?: string;
    weight?: number;
    manufacturer?: string;
    origin?: string;
}