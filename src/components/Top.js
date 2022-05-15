import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchFilter from "./SearchFilter";

const Top = ({searchCountry, handleSearch, handleNav, home}) => {
    return (
        <>
            <Header
                home={home}
            />
            <SearchFilter
            searchCountry={searchCountry}
            handleSearch={handleSearch}
            handleNav={handleNav}
            />
            <Outlet/>
        </>
    )
}

export default Top