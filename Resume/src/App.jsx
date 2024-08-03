import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import data from "./data.json";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [language, setLanguage] = useState("sv");

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <>
            <main>
                <header>
                    {Object.keys(data.letter).map((lang) => (
                        <button onClick={() => setLanguage(lang)}>{lang}</button>
                    ))}
                </header>
                <h1>{data.letter[language].letter_header}</h1>
                <p>{data.letter[language].letter}</p>
                <div className="image">
                    <img src={data.thumbnail} alt="Profile" />
                </div>
            </main>
        </>
    );
}

export default App;
