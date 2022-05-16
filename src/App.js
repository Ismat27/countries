import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Countries from "./pages/Countries"
import CountryDetail from './pages/CountryDetail';
import Top from './components/Top';
import './App.css';

function App() {
  const [searchCountry, setSearchCountry] = useState('')
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  const handleSearch = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setSearchCountry(value)
    let newData = data2.filter(item => item.name.toLowerCase().startsWith(value));
    setData(newData)
  }
  const handleNav = (continent) => {
    // setSearchCountry('')
    setData(prevData => {
      const newData = data2.filter(item => item.region.toLowerCase() === continent)
      return newData
    })
  }

  const home = () => {
    setData(data2.slice(0,10))
  }
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then((dt) => {
      setData(dt)
      setData2(dt)
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
           home={home}
           darkMode={darkMode}
           toggleDarkMode={toggleDarkMode}
          />
        }>
            <Route index element={<Countries searchCountry={searchCountry} data={data} darkMode={darkMode}/>}/>
        </Route>
        <Route path='country/:countryName' element={<CountryDetail data={data} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
