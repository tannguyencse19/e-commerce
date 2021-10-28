import Test from './components/Test';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/">
            <Navbar></Navbar>
            <Hero></Hero>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App;
