import React, {useCallback} from 'react';
import ReactDOM from 'react-dom'
import {useDispatch, useSelector} from "react-redux";
import {AppState, Category, Section} from "./app.types";
import "./appCSS.css";
import Home from "./components/Home";
import Categories from "./components/categories/Categories";
import About from "./components/About";
import Summary from "./components/Summary";
import Dashboard from "./components/dasboard/Dashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ShowSections from "./components/categories/ShowSections";
import ProductListItem from "./components/categories/ProductListItem";
import {closeSideMenu, openSideMenu, selectView} from "./store/actions/views-actions";
import SignedOutLinks from "./components/layout/SignedOutLinks";
import SignedInLinks from "./components/layout/SignedInLinks";
import CartComponent from "./components/cart/CartComponent";

const App : React.FC = () => {
    const activeView = useSelector<AppState,string>(state => state.selectedView)
    const selectedCategory = useSelector<AppState,string>( (state) => state.selectedCategory);
    const selectedSection = useSelector<AppState,string>( (state) => state.selectedSection);
    const selectedProduct = useSelector<AppState,string>( (state) => state.selectedProduct);
    const sections = useSelector<AppState,Section[]>( (state) => state.sections);
    const categories = useSelector<AppState,Category[]>( (state) => state.categories);
    const sideMenuAppear = useSelector<AppState,boolean>( (state) => state.sideMenuAppear)


    let dispatch = useDispatch();


    let handleView = useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])

    let openMenuHandler = useCallback((e : any)=>{
        e.preventDefault();
        dispatch(openSideMenu());
    },[]);

    let closeMenuHandler = useCallback((e : any)=>{
        e.preventDefault();
        dispatch(closeSideMenu());
    },[]);

    return (
            <div className="App-container">
                <header>
                    <div className="WrapTitle">
                        {<div className="SquaredButtons" id="menu-button-container" onClick={openMenuHandler}>
                            <svg id="burger-menu-svg" viewBox="0 -53 384 384"  xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                                <path
                                    d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                                <path
                                    d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                            </svg>
                        </div>}
                        <h1 id="title" > PANIFRUTTI </h1>
                    </div>
                    {<div className="SquaredButtons" id="cart-button-container" onClick={handleView("cart")}>
                        <svg version="1.1" id="cart-button-svg" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                             viewBox="0 0 511.999 511.999" >
<g>
	<g>
		<path d="M510.354,111.029c-1.275-1.592-3.145-2.597-5.176-2.781L91.096,70.665c-0.232-5.7-2.493-11.333-6.835-15.675L40.172,10.9
			c-4.444-4.444-10.354-6.893-16.64-6.893c-6.286,0-12.195,2.449-16.639,6.893C2.448,15.345,0,21.255,0,27.541
			s2.448,12.195,6.893,16.64l44.089,44.088c4.444,4.445,10.354,6.893,16.64,6.893c2.365,0,4.677-0.347,6.878-1.016l62.687,207.577
			c5.105,16.904,20.392,28.13,37.79,28.13c0.984,0,1.977-0.036,2.973-0.109L461.443,309c14.865-1.087,27.053-12.604,28.981-27.384
			l21.512-164.928C512.201,114.665,511.629,112.622,510.354,111.029z M73.654,77.662c-1.612,1.611-3.754,2.499-6.033,2.499
			c-2.279,0-4.421-0.887-6.033-2.499L17.499,33.573C15.887,31.962,15,29.819,15,27.541c0-2.278,0.887-4.422,2.499-6.034
			c1.612-1.611,3.754-2.499,6.033-2.499s4.421,0.888,6.033,2.499l44.089,44.089C76.981,68.923,76.981,74.336,73.654,77.662z
			 M258.275,100.9l3.382,54.872l-70.111-2.554L180.483,93.84L258.275,100.9z M87.528,85.402l77.435,7.029l11.221,60.228
			l-69.106-2.518L87.528,85.402z M133.115,236.355l-21.453-71.037L179,167.771l12.536,67.286L133.115,236.355z M176.854,314.783
			c-11.56,0.843-21.959-6.309-25.308-17.397l-13.93-46.127l56.704-1.26l11.673,62.653L176.854,314.783z M194.362,168.331
			l68.222,2.485l3.857,62.576l-59.71,1.327L194.362,168.331z M221.045,311.55l-11.531-61.889l57.849-1.286l3.668,59.517
			L221.045,311.55z M339.04,302.916l-53.047,3.881l-3.621-58.756l58.163-1.292L339.04,302.916z M340.935,231.737l-59.486,1.322
			l-3.802-61.694l64.832,2.361L340.935,231.737z M342.878,158.73l-66.159-2.41l-3.331-54.048l70.821,6.428L342.878,158.73z
			 M411.194,297.636l-57.119,4.18l1.475-55.4l59.873-1.331L411.194,297.636z M416.632,230.055l-60.683,1.348l1.521-57.131
			l63.465,2.312L416.632,230.055z M422.139,161.618l-64.27-2.341l1.31-49.218l66.622,6.047L422.139,161.618z M475.55,279.676
			c-1.01,7.752-7.404,13.793-15.201,14.364l-34.017,2.489l4.166-51.779l49.752-1.106L475.55,279.676z M482.213,228.597
			l-50.505,1.123l4.232-52.589l52.736,1.921L482.213,228.597z M490.624,164.112l-53.481-1.948l3.597-44.703l55.314,5.021
			L490.624,164.112z"/>
	</g>
</g>
                            <g>
	<g>
		<path d="M439.855,445.804v-17.973h16.548v0c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H144.04
			c-2.919,0-5.516-1.398-7.123-3.835c-1.607-2.438-1.87-5.374-0.72-8.058l21.185-49.432c1.632-3.807-0.132-8.216-3.939-9.848
			c-3.807-1.632-8.216,0.131-9.848,3.939l-21.185,49.431c-3.125,7.293-2.383,15.601,1.984,22.225
			c4.367,6.623,11.711,10.578,19.646,10.578h8.267v17.973c-13.786,3.375-24.048,15.829-24.048,30.64
			c0,17.396,14.152,31.549,31.548,31.549s31.548-14.153,31.548-31.549c0-14.811-10.262-27.265-24.048-30.64v-17.973h257.548v17.973
			c-13.786,3.375-24.048,15.829-24.048,30.64c0,17.396,14.152,31.549,31.548,31.549s31.548-14.153,31.548-31.549
			C463.903,461.633,453.641,449.179,439.855,445.804z M176.355,476.443c0,9.125-7.423,16.549-16.548,16.549
			s-16.548-7.424-16.548-16.549s7.423-16.548,16.548-16.548S176.355,467.319,176.355,476.443z M432.355,492.992
			c-9.125,0-16.548-7.424-16.548-16.549s7.423-16.548,16.548-16.548s16.548,7.424,16.548,16.548
			C448.903,485.568,441.48,492.992,432.355,492.992z"/>
	</g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
                            <g>
</g>
</svg>
                    </div>}
                </header>

                {sideMenuAppear && <nav className="TopBar-wrapper" onClick={closeMenuHandler}>
                    <SignedInLinks/>
                </nav>}

                <div className="Main-wrapper">
                    { (activeView === "login") ? <Login/> : null }
                    { (activeView === "signup") ? <SignUp/> : null }
                    { (activeView === "about") ? <About/> : null }
                    { (selectedCategory === "" || activeView ==="categories") ? <Categories/> : null}
                    { (activeView === "sections") ? <ShowSections/> : null}
                    { (activeView === "products") ? <ProductListItem/> : null}
                    { (activeView === "cart" ? <CartComponent/> : null) }


                    {(activeView === "categories" || activeView === "") ? <div className="Content-wrapper"><h1>{activeView}</h1></div> : null}

                    {/*<Summary/>*/}
                    {/*<ProductListItem/>*/}
                </div>
                <SignedOutLinks/>
            </div>
    )
}

export default App;