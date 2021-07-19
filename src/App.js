import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile' component={Profile}/>
                    <Route path ='/dialogs' component={Dialogs}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
