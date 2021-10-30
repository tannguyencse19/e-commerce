import Test from './components/Test';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import Home from './views/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Transition from './utils/Transition';


function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/transition">
            <Transition />
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
