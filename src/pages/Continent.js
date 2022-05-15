import Country from "../components/Country";
import { useParams } from "react-router-dom";
const Continent = ({data, searchCountry}) => {
    const {continent} = useParams()
    let countries = data.filter(item => item.region.toLowerCase() === continent.toLowerCase());
    if (searchCountry) {
        countries = countries.filter(item => item.name.toLowerCase().startsWith(searchCountry.toLowerCase())).map((item) => {
            return (
                <Country
                    key={item.name}
                    dt={item}
                />
            )
        })
    }
    else {
        countries = countries.map((item) => {
        return (
            <Country
                key={item.name}
                dt={item}
            />
        )
    })
    }
    
    return (
        <div className="countries">
            {countries}
        </div>
    )
}

export default Continent