import { Link } from "react-router-dom"
const Header = ({darkMode, toggleDarkMode}) => {
    // home()
    return (

        <header className={`bg-white ${darkMode?'bg-dark': ''} `}>
            <div className="header">
                <h1><Link to={'/'}>Where in the world?</Link></h1>
                <h1 className="btn" onClick={toggleDarkMode}>Dark mode</h1>
            </div>
        </header>
    )
}

export default Header