import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Doghome from './container/Home/Doghome';
import DogDetails from './container/Detail/Dogdetail.jsx';
import Landingpage from "./container/LandingPage/Landingpage.jsx"
import DogCreate from "./container/Create/DogCreate.jsx"
import Footer from './container/footer/footer';
import Cathome from './container/Home/Cathome';
import CatCreate from './container/Create/CatCreate';
import CatDetails from './container/Detail/Catdetail';


function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
      <Route path="/" exact component={Landingpage}/>

      <Route path="/dogs" exact component={Doghome}/>
      <Route path="/cats" exact component={Cathome}/>

      <Route path="/dogs/create" exact component={DogCreate}/>
      <Route path="/cats/create" exact component={CatCreate}/>

      <Route path="/dogs/:id"  component={DogDetails}/>
      <Route path="/cats/:id"  component={CatDetails}/>

      </Switch>
      </Router>
      
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
