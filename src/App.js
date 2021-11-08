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
import ProductDetails from './views/ProductDetails/ProductDetails';
import Carousel from './utils/CarouselChoc'

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/carousel" component={Carousel} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/category" component={Category} />
          <Route exact path="/" render={Home} />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App;
