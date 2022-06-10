import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import './CountryDetail.css';
const CountryDetail = ({data, darkMode, toggleDarkMode}) => {
    const navigate = useNavigate()
    const {countryName} = useParams()
    // const country = data.find(item => item.name === countryName)
    const [country, setCountry] = useState({languages:[], currencies:[], borders:[]})
    const countryBorders = country.borders.map(border => {
        return <span className="border" key={border}>{border}</span>
    })
    const languages = country.languages.map(language => language.name).join(', ')
    const currencies = country.currencies.map(currency => {
        return <span key={currency.name}>{currency.name}</span>
    })
    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        .then(countryData => {
            if (countryData[0].borders) {
                setCountry(countryData[0])
            }
            else {
                setCountry({...countryData[0], borders:['not available']})
            }
        })
    }, [countryName])
    return (
        
        <section className={`body bbg-white ${darkMode?'bbg-dark': ''}`}>
             <Header
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <main className={`bbg-white ${darkMode?'bbg-dark': ''} `}>
                <button
                 onClick={() => navigate(-1)}
                 className={`bg-white ${darkMode?'bg-dark': ''} nav-btn `}
                >
                    Back
                </button>
                <div className="main">
                    <div className="country-flag">
                        <img src={country.flag} alt="country"/>
                    </div>
                    <div className="country-details">
                        <h1>{country.name}</h1>
                        <div className="main-details">
                            <div className="d1">
                                <p>
                                    <strong>Native Name: </strong>
                                    <span>{country.nativeName}</span>
                                </p>
                                <p>
                                    <strong>Population: </strong>
                                    <span>{country.population}</span>
                                </p>
                                <p>
                                    <strong>Region: </strong>
                                    <span>{country.region}</span>
                                </p>
                                <p>
                                    <strong>Sub Region: </strong>
                                    <span>{country.subregion}</span>
                                </p>
                                <p>
                                    <strong>Capital: </strong>
                                    <span>{country.capital}</span>
                                </p>
                            </div>
                            <div className="d2">
                                <p>
                                    <strong>Top Level Domain: </strong>
                                    <span>{country.topLevelDomain}</span>
                                </p>
                                <div className="languages">
                                    <strong>Languages: </strong>
                                    <div className="country-languages">
                                        {languages}
                                    </div>
                                </div>
                                <div className="currencies">
                                    <strong>Currencies: </strong>
                                    <div className="country-currencies">
                                        {currencies}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-countries">
                            <h2>Border Countries : </h2>
                            <div className="borders">
                                {countryBorders}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </section>
    )
}

export default CountryDetail