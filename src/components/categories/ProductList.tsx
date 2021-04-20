import React, {useCallback, useState} from 'react';
import {AppState, CartProduct, Product} from "../../app.types";
import {useDispatch, useSelector} from "react-redux";
import {
    selectProduct,
} from "../../store/actions/catalog-actions/catalogActions";
import {selectView} from "../../store/actions/global-actions";
import CartButtonsPanel from "../cart/CartButtonsPanel";
import ProductCard from "../layout/ProductCard";

/** Returns a React.FC, representing a ProductList
 *  passed by the caller
 *
 * STATE: {
 *          product: Product
 *       }
 */


const ProductList : React.FC= () => {

    const products = useSelector<AppState,Product[]>( (state) => state.products);
    const selectedProduct = useSelector<AppState,string>( (state) => state.selectedProduct);

    const dispatch = useDispatch();

    const [item,setItem] = useState<Product|undefined>({ id: ""});

    let selectProductHandler = useCallback((id: string, products: Product[]) => (e : React.MouseEvent) => {
        let tmp = products.find(product => product.id === id);
        setItem(tmp);
        dispatch(selectProduct(id));
    }, [])

    let handle = useCallback((str : string) => (e : any)=>{
        dispatch(selectView(str));
    },[])


    let closeCard = useCallback(() => {
        dispatch(selectProduct(""))
    },[]);

    let cart = useSelector<AppState,CartProduct[]>((state: AppState) => state.cartProducts)



    return (
        <div className="Content-wrapper" id="productList-wrapper">
            <div className="ProductList-wrapper">
                <div className="NavHistory">
                    <h5 onClick={handle("sections")} className="NavLinksSmall">Sections </h5>
                    <h5> &gt; </h5>
                    <h5 onClick={handle("products")} className="NavLinksSmall">Products </h5>
                </div>

                <ul className="ProductList">
                {
                    products &&
                    products
                        .map((el : Product ) => {
                            return (
                                <li className="Section-item"
                                     key={el.id}
                                >
                                    <div className="ProductListItemDetails">

                                        <div className="ItemImage">
                                            <div className="TEMPimage" onClick={selectProductHandler(el.id,products)}>{el.image}</div>
                                        </div>
                                        <div className="ListItemInfo-container">
                                            <div className="ListItemInforms" id="list-item-info-wrapper">
                                                <h5>{el.id}</h5>
                                                <h5>{el.price}</h5>
                                            </div>
                                            <CartButtonsPanel product={el}/>
                                        </div>

                                    </div>

                                </li> )
                            }
                        )
                }
                </ul>
            </div>
            {
                (selectedProduct !== "") ? <ProductCard product={item} selectedProduct={selectedProduct}/>
                                         : null
            }
            {
                (selectedProduct !== "") ? <div className="ProductCard-back" onClick={closeCard}/> : null
            }

        </div>
    );
}

export default ProductList;