import { Link } from "react-router-dom"
const Header = ({home}) => {
    // home()
    return (

        <header className="bg-white">
            <div className="header">
                <h1 onClick={home}><Link to={'/'}>Where in the world?</Link></h1>
                <h1>Dark mode</h1>
            </div>
        </header>
    )
}

export default Header