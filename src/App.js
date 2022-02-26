import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import theme from './utils/theme'
import { Suspense, lazy } from 'react';
import Loading from "./components/Loading";
import Navbar from './components/Navbar';

const Home = lazy(() => import("./views/Home/Home"))
const Category = lazy(() => import('./views/Category/Category'));
const ProductDetails = lazy(() => import('./views/Product/Details'));
const Blog = lazy(() => import('./views/Blog/Blog'));
const CartDetails = lazy(() => import('./views/Cart/Details/Details'));
const CartCheckout = lazy(() => import('./views/Cart/Checkout/Checkout'));
const Stripe = lazy(() => import('./views/Cart/Checkout/Stripe'));

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme} id="App">
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/card-payment" component={Stripe} />
            <Route path="/cart-detail" component={CartDetails} />
            <Route path="/checkout" component={CartCheckout} />
            <Route path="/blog" component={Blog} />
            <Route path="/category" component={Category} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </ChakraProvider>
  )
}

export default App;
