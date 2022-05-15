import { useParams } from "react-router-dom"
import Header from "../components/Header"
const CountryDetail = () => {
    const {countryName} = useParams()
    return (
        
        <>
            <Header/>
            Hello {countryName}
        </>
    )
}

export default CountryDetail