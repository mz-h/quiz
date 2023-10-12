import './App.css';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './routes';


// this is basis solution based on requirements:
// * no authentication required based on provided quiz details
// * no home page required based on provided quiz details 
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
