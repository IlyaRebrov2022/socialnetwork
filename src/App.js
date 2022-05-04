import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <NavBar state = {props.state.friendsList}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage = {props.state.profilePage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state = {props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
