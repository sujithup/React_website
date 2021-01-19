import './App.css';
import Contact from "./components/Contact";
import Home from "./components/Home"
import Explore from "./components/Explore"
import About from "./components/About"
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar"
import { Switch, Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min.js";
import Footer from "./components/Footer"
import First from "./components/Forms/Firstform"
import Second from "./components/Forms/Secondform"
import Third from "./components/Forms/Thirdform"
import Fourth from "./components/Forms/FourthForm"
import Fifth from "./components/Forms/Fifthform"
import Sixth from "./components/Forms/Sixthform"
import Seventh from "./components/Forms/Seventhform"
import Eight from "./components/Forms/Eigthform"
import Ninth from "./components/Forms/Ninthform"
import Tenth from "./components/Forms/Tenthform"
import Eleventh from "./components/Forms/Eleventhform"
import Twelth from "./components/Forms/Twelthform"

const App =() => {

    return ( 
    <>
    <Navbar/>
    
    <Switch>
        <Route exact path = "/" component = {Home}  />
        <Route exact path = "/explore" component = {Explore} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path = "/first" component = {First} />
        <Route exact path = "/second" component = {Second} />
        <Route exact path = "/third" component = {Third} />
        <Route exact path = "/fourth" component = {Fourth} />
        <Route exact path = "/fifth" component = {Fifth} />
        <Route exact path = "/sixth" component = {Sixth} />
        <Route exact path = "/seventh" component = {Seventh} />
        <Route exact path = "/eight" component = {Eight} />
        <Route exact path = "/ninth" component = {Ninth} />
        <Route exact path = "/tenth" component = {Tenth} />
        <Route exact path = "/eleventh" component = {Eleventh} />
        <Route exact path = "/twelth" component = {Twelth} />
    </Switch>

    <Footer/>

    </>
   )  
  }
    
export default App;
