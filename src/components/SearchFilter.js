const SearchFilter = ({searchCountry, handleSearch, handleNav, darkMode, showContinent, setShowContinent}) => {
    return (
        <section className="search-filter">
        <div className={`search bg-white ${darkMode? 'bg-dark': ''}`}>
            <input
                type="text"
                name="searchCountry"
                placeholder="search for a country..."
                value={searchCountry}
                onChange={handleSearch}
                className={`bg-white ${darkMode? 'bg-dark': ''}`}
            />
        </div>
        <ul className="filter">
            <li className="abc">
                <div className={`select-continent bg-white ${darkMode? 'bg-dark': ''}`}>
                    <span>Filter by region</span>
                    <span className="btn show-continents" onClick={setShowContinent}>+</span>
                </div>
                <ul className={`continents bg-white ${darkMode? 'bg-dark': ''} ${showContinent? 'show-continent': ''} `}>
                    <li
                     className="continent btn"
                     onClick={event => handleNav('africa')}
                    >
                        Africa
                    </li>
                    <li
                     className="continent btn"
                     onClick={event => handleNav('americas')}
                    >
                        Americas
                    </li>
                    <li
                     className="continent btn"
                     onClick={event => handleNav('asia')}
                    >
                        Asia
                    </li>
                    <li
                     className="continent btn"
                     onClick={event => handleNav('europe')}
                    >
                        Europe
                    </li>
                    <li
                     className="continent btn"
                     onClick={event => handleNav('oceania')}
                    >
                        Oceania
                    </li>
                </ul>
            </li>
        </ul>
    </section>
    )
}

export default SearchFilter