import { useParams } from "react-router-dom"
import Header from "../components/Header"
const CountryDetail = ({data, darkMode, toggleDarkMode}) => {
    const {countryName} = useParams()
    const country = data.find(item => item.name === countryName)
    return (
        
        <section className={`bbg-white ${darkMode?'bbg-dark': ''}`}>
             <Header
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <main>
                <div className="country-flag">
                <img src={country.flag} alt="country"/>
                </div>
                <div className="country-details">
                    <div className="main-details">
                        <div className="d1"></div>
                        <div className="d2"></div>
                    </div>
                    <div className="border-countries"></div>
                </div>
            </main>
        </section>
    )
}

export default CountryDetail