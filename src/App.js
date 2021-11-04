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
import Pagination from './utils/Pagination';
import MyPagination from './utils/MyPagination';

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/pagination">
            {/* <Pagination itemsPerPage={3} /> */}
            <MyPagination itemsPerPage={3} />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App;
