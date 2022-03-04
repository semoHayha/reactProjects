import React from 'react';
import './App.css'
import BirthdayReminder from "./components/BirthdayReminder";
import ToursContainer from "./components/ToursContainer";
import RandomUserGenerator from "./components/RandomUserGenerator";
import RandomTextGenerator from "./components/RandomTextGenerator";

function App() {
    return (
        <div className="App">
            <RandomTextGenerator />
            {/*<RandomUserGenerator />*/}
            {/*<ToursContainer />*/}
            {/*<BirthdayReminder />*/}
        </div>
    );
}

export default App;
