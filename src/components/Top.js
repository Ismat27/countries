import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchFilter from "./SearchFilter";

const Top = ({searchCountry, handleSearch, handleNav, home, darkMode, toggleDarkMode, showContinent, setShowContinent}) => {
    return (

        <section className={`bbg-white ${darkMode?'bbg-dark': null}`}>
            <Header
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <SearchFilter
            searchCountry={searchCountry}
            handleSearch={handleSearch}
            handleNav={handleNav}
            darkMode={darkMode}
            showContinent={showContinent}
            setShowContinent={setShowContinent}
            />
            <Outlet/>
        </section>
    )
}

export default Top