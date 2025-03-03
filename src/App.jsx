import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import products from './data/products'

function App() {

  return (
    <>
    <Header />
      <h1>Products</h1>

      <div>
        {
          products.map(item => {
          return <Products {...item} key={item.id}/>
}
)
        }
      </div>

      <Footer />
    </>
  );
}

export default App;
