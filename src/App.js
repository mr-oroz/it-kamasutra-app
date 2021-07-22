import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Navbar/Friends/Friends";

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";



function App(props) {
    const ProfileCompoment = () => <Profile
        data={props.state.ProfilePage}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
    />;
    const DialogsCompoment = () => <Dialogs data={props.state.MessagePage}/>;
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile' render={ProfileCompoment}/>
                    <Route path='/dialogs' render={DialogsCompoment}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
