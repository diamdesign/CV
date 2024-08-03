import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import data from "./data.json";
import "./App.css";

function App() {
    const [language, setLanguage] = useState("sv");
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        console.log(data);
        console.log("Experience Array:", data.experience);
        console.log("Programming Array:", data.programming.data);
    }, []);

    useEffect(() => {
        // Split the text into paragraphs by double new lines
        const paragraphsArray = data.letter[language].text.split("\n\n");
        setParagraphs(paragraphsArray);
    }, [data.letter[language].text]);

    function calculateAge(dateString) {
        // Parse the input date string
        const birthDate = new Date(dateString);

        // Get the current date
        const today = new Date();

        // Calculate the age
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // Adjust age if the birthday hasn't occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <>
            <main>
                <div className="page1">
                    <div className="head">
                        <div className="image">
                            <img src={data.thumbnail} alt="Profile" />
                        </div>
                        <div className="info">
                            <h1>{data.name}</h1>
                            <h2>{`${data.gender[language]}, ${calculateAge(data.birthdate)}, ${
                                data.native[language]
                            }`}</h2>
                        </div>
                        <div className="language">
                            {Object.keys(data.letter).map((lang, index) => (
                                <button onClick={() => setLanguage(lang)} key={index}>
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>
                    <h1>{data.letter[language].letter_header}</h1>
                    <div className="column-container">
                        <div className="column">
                            {paragraphs
                                .filter((_, index) => index % 2 === 0)
                                .map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                        </div>
                        <div className="column">
                            {paragraphs
                                .filter((_, index) => index % 2 !== 0)
                                .map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                        </div>
                    </div>

                    <div className="column2">
                        <div className="experiences">
                            {data.experience.map((item, index) => (
                                <div className="item" key={index}>
                                    <h1>{item.title}</h1>
                                    <h2>
                                        {item.company + ", " + item.city}{" "}
                                        <span>
                                            {item.start} - {item.end}
                                        </span>
                                    </h2>

                                    <p>{item.description[language]}</p>
                                </div>
                            ))}
                        </div>
                        <div className="skills">
                            <div className="programming">
                                <h2>{data.programming.languages[language].header}</h2>
                                {data.programming.data.map((item, index) => (
                                    <div className="tagitem" key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="systemadmin">
                                <h2>{data.systemadmin.languages[language].header}</h2>
                                {data.systemadmin.data.map((item, index) => (
                                    <div className="tagitem" key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="graphics">
                                <h2>{data.graphics.languages[language].header}</h2>
                                {data.graphics.data.map((item, index) => (
                                    <div className="tagitem" key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page">
                    <div className="column2">
                        <div className="column">
                            <div className="personal">
                                <h2>{data.personal[language].header}</h2>
                                <p>{data.personal[language].text}</p>
                            </div>
                            <br />
                            <h2>{data.education.header[language]}</h2>
                            <div className="experiences">
                                {data.education.data.map((item, index) => (
                                    <div className="item" key={index}>
                                        <h1>{item.title}</h1>
                                        <h2>
                                            {item.company + ", " + item.city}{" "}
                                            <span>
                                                {item.start} - {item.end}
                                            </span>
                                        </h2>

                                        <p>{item.description[language]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="column">
                            <div className="lang">
                                <h2>{data.lang.languages[language].header}</h2>
                                {data.lang.data.map((item, index) => (
                                    <div className="tagitem" key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="driving">
                                <h2>{data.driving.languages[language].header}</h2>
                                {data.driving.data.map((item, index) => (
                                    <div className="tagitem" key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="website">
                                <h2>{data.website.languages[language].header}</h2>
                                <a href={data.website.data} className="tagitem" target="_blank">
                                    {data.website.data}
                                </a>
                            </div>
                            <div className="resume">
                                <h2>{data.resume.languages[language].header}</h2>
                                <a href={data.resume.data} className="tagitem" target="_blank">
                                    {data.resume.data}
                                </a>
                            </div>
                            <div className="portfolio">
                                <h2>{data.portfolio.languages[language].header}</h2>
                                <a href={data.portfolio.data} className="tagitem" target="_blank">
                                    {data.portfolio.data}
                                </a>
                            </div>
                            <div className="github">
                                <h2>{data.github.languages[language].header}</h2>
                                <a href={data.github.data} className="tagitem" target="_blank">
                                    {data.github.data}
                                </a>
                            </div>
                            <div className="email">
                                <h2>E-mail</h2>
                                <a href={"mailto:" + data.email} className="tagitem">
                                    {data.email}
                                </a>
                            </div>
                            <div className="discord">
                                <h2>Discord</h2>
                                <span className="tagitem">{data.discord}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
