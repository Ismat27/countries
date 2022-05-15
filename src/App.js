import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Countries from "./pages/Countries"
// import Continent from './pages/Continent';
import CountryDetail from './pages/CountryDetail';
import Top from './components/Top';
import './App.css';

function App() {
  const [searchCountry, setSearchCountry] = useState('')
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])

  const handleSearch = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setSearchCountry(value)
    let newData = data2.filter(item => item.name.toLowerCase().startsWith(value));
    setData(newData)
    // console.log(searchCountry);
  }
  const handleNav = (continent) => {
    setSearchCountry('')
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
  // console.log(data[0]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top searchCountry={searchCountry} handleSearch={handleSearch} handleNav={handleNav} home={home}/>}>
            <Route index element={<Countries searchCountry={searchCountry} data={data}/>}/>
            {/* <Route element={<Continent searchCountry={searchCountry} data={data}/>} path=':continent' /> */}
        </Route>
        <Route path='country/:countryName' element={<CountryDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
