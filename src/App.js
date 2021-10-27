import Test from './components/Test';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar';

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Navbar></Navbar>
    </ChakraProvider>
  )
}

export default App;
