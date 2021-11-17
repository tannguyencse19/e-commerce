import Test from './components/Test';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import Home from './views/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Category from './views/Category/Category';
import ProductDetails from './views/Product/Details';
import Blog from './views/Blog/Blog';
import CartDetails from './views/Cart/Details/Details';
import CartCheckout from './views/Cart/Checkout/Checkout';
import Stripe from './views/Cart/Checkout/Stripe';

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/card-payment" component={Stripe} />
          <Route path="/cart-detail" component={CartDetails} />
          <Route path="/checkout" component={CartCheckout} />
          <Route path="/blog" component={Blog} />
          <Route path="/category" component={Category} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route exact path="/" render={Home} />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App;
