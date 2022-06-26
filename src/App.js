import Home from "./routes/home.component";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";

const Shop = () => {
  return (
    <div>
      <h1>SHopp page content </h1>
      <Outlet />
    </div>
  )
}
const Product = () => {
  return (
    <h2> Product Informarion </h2>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} >
          <Route path="product" element={<Product />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
