import { Link } from "react-router-dom";

const Country = ({dt}) => {
    return (
        <Link to={`country/${dt.name}`}>
            <div  className='country bg-white'>
                    <div className="country-image">
                        <img src={dt.flag} alt="country-image"/>
                    </div>
                    <div className="country-mini-details">
                        <h3 className="country-name">{dt.name}</h3>
                        <p>
                            <strong>Population: </strong>
                            <span>{dt.population}</span>
                        </p>
                        <p>
                            <strong>Region: </strong>
                            <span>{dt.region}</span>
                        </p>
                        <p>
                            <strong>Capital: </strong>
                            <span>{dt.capital}</span>
                        </p>
                    </div>
            </div>
        </Link>
    )
}

export default Country