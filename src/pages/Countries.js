import Country from "../components/Country";

const Countries = ({data, darkMode}) => {
    const countries = data.map((item) => {
        return (
            <Country
                key={item.name}
                dt={item}
                darkMode={darkMode}
            />
        )
    })
    return (
        <div className="countries">
            {countries}
        </div>
    )
}

export default Countries