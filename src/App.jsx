import './App.css'
import Navbar from "./Component/Navbar-Component/Navbar.jsx"
import Heading from "./Component/Heading-Component/Heading.jsx"
import ProductCard from './Component/Products-Box/Product-Card.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Heading />
      <div className="PARENTOP">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}

export default App
