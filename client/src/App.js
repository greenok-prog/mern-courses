


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import RoutesList from "./components/RoutesList";
import MySnackBar from "./components/Snackbar/MySnackBar";
import { getCategoriesProducts } from "./redux/api/products";
import { setCart } from "./redux/reducers/cart";
import { setFav } from "./redux/reducers/favorite";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFav());
    dispatch(setCart());
  })

  return (
    <div className="App d-flex flex-column min-vh-100">



      <div className="wr">
        <Navbar />
        <RoutesList />
        <MySnackBar />
      </div>


      <Footer />

    </div>
  );
}

export default App;
