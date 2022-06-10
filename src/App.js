import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import Countries from "./pages/Countries"
import PaginatedCountries from './pages/PaginatedCountries';
import CountryDetail from './pages/CountryDetail';
import Top from './components/Top';
import './App.css';

function App() {
  const [searchCountry, setSearchCountry] = useState('')
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [showContinent, setShow] = useState(false)
  const [itemOffset, setItemOffset] = useState(0) // for pagination

  const setShowContinent = () => {
    setShow(prevData => !prevData)
  }
  
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  const handleSearch = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setSearchCountry(value)
    let newData = data2.filter(item => item.name.toLowerCase().startsWith(value));
    setData(newData)
    setItemOffset(0)
  }
  const handleNav = (continent) => {
    const newData = data2.filter(item => item.region.toLowerCase() === continent)
    setData(newData)
    setItemOffset(0)
    setShow(false)
  }

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then((countriesData) => {
      setData(countriesData)
      setData2(countriesData)
    })
    .catch((error) => console.log(error))
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
         element={<Top
           searchCountry={searchCountry}
           handleSearch={handleSearch}
           handleNav={handleNav}
           darkMode={darkMode}
           toggleDarkMode={toggleDarkMode}
           showContinent={showContinent}
           setShowContinent={setShowContinent}
          />
        }>
            <Route
             index
             element={<PaginatedCountries
                itemsPerPage={10}
                data={data}
                darkMode={darkMode}
                itemOffset={itemOffset}
                setItemOffset={setItemOffset}
             />}
            />
            {/* <Route index element={<Countries searchCountry={searchCountry} data={data} darkMode={darkMode}/>}/> */}
        </Route>
        <Route path='/:countryName' element={<CountryDetail data={data} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
