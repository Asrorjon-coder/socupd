import Navbar from "./components/navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./components/sidebar";
import Pole from "./components/pole";
import n from './css/Navbar.module.css';
import p from "./css/Pole.module.css";
import s from "./css/Sidebar.module.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className={n.navbar}>
                <Navbar/>
            </div>
            <div className={s.sidebar}>
                <Sidebar/>
            </div>
            <div className={p.div}>
                <Route path='/home'/>
                <Route path='/about'/>
                <Route path='/login' component={Pole}/>
            </div>
        </BrowserRouter>
    );
};
export default App;