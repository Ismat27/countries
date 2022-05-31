import { Link } from "react-router-dom"
const Header = ({darkMode, toggleDarkMode}) => {
    // home()
    return (

        <header className={`bg-white ${darkMode?'bg-dark': ''} `}>
            <div className="header">
                <h1><Link to={'/'}>Where in the world?</Link></h1>
                <div className="mode-container">
                    <span
                        onClick={toggleDarkMode}
                        className={`dark-toggle ${darkMode? 'toggle': ''}`}
                    >
                        <span className="slides"></span>
                    </span>
                    <h1>Dark Mode</h1>
                </div>
            </div>
        </header>
    )
}

export default Header