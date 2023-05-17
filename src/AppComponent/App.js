import './App.css';
import {Route,Routes,Outlet} from "react-router-dom";
// import Sidebar from "../components/session6(crud)/Sidebar";
// import Home from "../components/session6(crud)/Home";
// import Products from "../components/session6(crud)/Products";
// import Categories from "../components/session6(crud)/Categories";
// import Navbar from "../components/session5/Navbar";
// import ProductDetails from "../components/session6(crud)/ProductDetails";
// import AddProduct from "../components/session6(crud)/AddProduct";
// import UpdateProduct from "../components/session6(crud)/UpdateProduct";
// import Login from "../components/Authentication/Login";
// import Home from "../components/Authentication/Home";
// import ReactRedux from "../components/session10/ReactRedux/ReactRedux";
// import ReactToolkit from "../components/session10/ReduxToolkit/ReactToolkit";
import Products from "../components/session11(cart)/Products";
import Cart from "../components/session11(cart)/Cart";
import NavbarComponent from "../components/session11(cart)/NavBar";
import Login from "../components/Authentication/Login";
import Home from "../components/Authentication/Home";
import ReactToolkit from "../components/session10/ReduxToolkit/ReactToolkit";
// import Home from "../components/session6(crud)/Home";
// import ProductListForAtoms from "../components/session7/ProductListForAtoms";
// import CardWithChilds from "../components/session7/CardWithChilds";
// import Navbar from "../components/session5/Navbar";
// import Slider from "../components/session5/Slider";
// import Products from "../components/session5/ProductsComponent/Products";
// import About from "../components/session5/About";
// import Contact from "../components/session5/Contact";
// import ProductInfo from "../components/session5/ProductInfo";
// import ProductProvider from '../components/session7/ProductContext'
// import ProductList from "../components/session7/ProductList";
// import CategoryProvider from "../components/session7/CategoryContext";

function App() {

  return (
    <div className="App">
                       {/*session5*/}
        {/*<Routes>*/}
        {/*    <Route path='/' element =*/}
        {/*        {*/}
        {/*        <>*/}
        {/*            <Navbar />*/}
        {/*            <Slider />*/}
        {/*            <Products />*/}
        {/*        </>*/}
        {/*        }*/}
        {/*    />*/}
        {/*    <Route path='/about' element ={<About />}/>*/}
        {/*    <Route path='/contact' element = {<Contact />}/>*/}
        {/*    <Route path='product/:productID' element={<ProductInfo/>}/>*/}
        {/*</Routes>*/}

                    {/*session6*/}
        <Navbar />
        <div className='row'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
                <Routes>
                    <Route path='/' element ={<Home />}/>
                    <Route path='/categories' element ={<Categories />}/>
                    <Route path='products' element = {
                        <>
                            <Outlet />
                        </>
                    }
                    >
                        <Route path='' element ={<Products />}/>
                        <Route path=':id' element = {<ProductDetails />}/>
                        <Route path= 'add' element={<AddProduct/>}/>
                        <Route path= 'edit/:id' element ={<UpdateProduct />}/>
                    </Route>
                </Routes>

            </div>
        </div>

                        {/*Authentication*/}

        {/*<Routes>*/}
        {/*    <Route path='/' element={<Login />}/>*/}
        {/*    <Route path='/home' element = {<Home />}/>*/}
        {/*</Routes>*/}

                            {/*session7*/}
        {/*contextAPI*/}
        {/*<ProductProvider>*/}
        {/*    <CategoryProvider>*/}
        {/*        <ProductList />*/}
        {/*    </CategoryProvider>*/}
        {/*</ProductProvider>*/}

        {/*Recoil*/}
        {/*<ProductListForAtoms />*/}
        {/*<CardWithChilds>*/}
        {/*    <CardWithChilds.Title />*/}
        {/*    <CardWithChilds.Body />*/}
        {/*</CardWithChilds>*/}

                        {/* session 10*/}
      {/*<ReactRedux />*/}
      {/*  <ReactToolkit/>*/}

                        {/* session 11*/}
        {/*<NavbarComponent />*/}
        {/*<Routes>*/}
        {/*    <Route  path='/' element={<Products/>}/>*/}
        {/*    <Route  path='/cart' element={<Cart/>}/>*/}
        {/*</Routes>*/}

    </div>
  );
}

export default App;
