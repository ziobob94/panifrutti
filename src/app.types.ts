export type AppState = {
    userRole: string;
    userToken: string;
    categories: Category[];         //categorie generali
    selectedCategory: string;       //categoria selezionata
    sections: Section[];            //sotto categorie
    selectedSection: string;        //sezione scelta
    products: Product[];            //lista di prodotti
    selectedProduct: string;       //prodotto singolo
    selectedView: string;            //vista da renderizzare
    sideMenuAppear: boolean;         //gestisce apertura menu laterale
    cartProducts: CartProduct[];     //lista di prodotti selezionati
    cartPopupAppear: boolean;        //gestisce apertura carrello popup
};

export type Product = {
    id: string;
    isAvailable?: boolean;
    description?: string;
    preorder?: boolean;
    measureKg?: string;
    price?: number;
    section?: string;
    primizia?: string;
    image?: any;
}

export type Section = {
    id : string;
    image? : string;
    isAvailable?: boolean;
    category?: string;
}

export type Category = {
    id: string;
    image?: string;
    isAvailable?: boolean;
}

export type Order = {
    user: object;
    total: number;
    selected: Product[];
}


export type CartProduct = {
    product: Product;
    quantity: number;
}

export type LocalUserCredentials = {
    email: string,
    password: string,
}

export type UserData = {
    id: string;
    name: string;
    lastName: string;
    position: string;
}