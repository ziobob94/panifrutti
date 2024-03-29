import { CatalogActions } from "../../actions/catalog-actions/catalogActions";
import {Category, Product, Section} from "../../../app.types";


export const categoriesReducer = (state : Category[] = [], action : CatalogActions) => {
    switch (action.type) {
        case "CATEGORIES_FETCH_END" :
            return action.categories;

        default : return state;
    }
}

export const selectedCategoryReducer = (state = "", action : CatalogActions) => {
    switch (action.type) {
        case "SET_SELECTED_CATEGORY":
            return action.id
        default : return state;
    }
}

export const sectionsReducer = (state: Section[] = [], action: CatalogActions) => {
    switch (action.type) {
        case "SECTIONS_FETCH_END" :
            return action.sections
        default : return state;
    }
}

export const selectedSectionReducer = (state = "", action: CatalogActions) => {
    switch (action.type) {
        case "SET_SELECTED_SECTION" :
            return action.id
        default : return state;
    }
}

export const productsReducer = (state: Product[] = [], action: CatalogActions) => {
    switch (action.type) {
        case "PRODUCTS_FETCH_END" :
            return action.products
        default : return state;
    }
}

export const selectedProductReducer = (state = "", action: CatalogActions) => {
    switch (action.type) {
        case "SET_SELECTED_PRODUCT" :
            return action.id
        default : return state;
    }
}
