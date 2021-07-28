import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import Head from './component/Head'
import Main from './component/Main'
import Footer from './component/Footer'
import TopBtn from './component/topbtn'

function App() {
  return (
    <BrowserRouter>
      <Route path="/webpage">
        <Head />
        <Main />
        <Footer /> 
        <TopBtn />
      </Route>
    </BrowserRouter>
  );
}

export default App;
