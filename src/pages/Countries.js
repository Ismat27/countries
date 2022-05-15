import Country from "../components/Country";

const Countries = ({data}) => {
    const countries = data.map((item) => {
        return (
            <Country
                key={item.name}
                dt={item}
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