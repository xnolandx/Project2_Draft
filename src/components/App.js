import { React, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "./Header";
import Navbar from './Navbar';

import Character from "./Character";
import Event from "./Event";
import AboutUs from "./AboutUs.js";
import MostWanted from "./MostWanted.js";

import CharacterContext from "./CharacterContext";
import EventContext from "./EventContext";

import './App.css';
import MainSearch from './MainSearch';

import Footer from './Footer';




function App() {
  const[characterCon, setCharacterCon] = useState([]);
  const value = {characterCon, setCharacterCon};
  const[eventCon, setEventCon] = useState([]);
  const value2 = {eventCon, setEventCon};

  return (
    <>
    <Header/>
    
     <Router>
     <Navbar/>
     
     <CharacterContext.Provider value={value}>
      <EventContext.Provider value={value2}>
       
          <Routes>
            <Route path="/" element={<MainSearch character={characterCon}/>}/>
            <Route path="/characters/:characterid" element={<Character character={characterCon}/>}/>
            <Route path="/events/:eventid" element={<Event event={eventCon}/>}/>
            <Route path="/mostwanted" element={<MostWanted />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
          </Routes>
        </EventContext.Provider>
      </CharacterContext.Provider>
      <Footer/>
      </Router>
     </>
  );
}

/* Jason wrote this--just cut/paste from here to up above when ready to add a route.
<Route path="/teams/:teamid" element={<Teams team={eventCon}/>}></Route>
<Route path="/profile/:profileid" element={<Profile profile={eventCon}/>}></Route>
*/
export default App;
