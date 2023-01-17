import './__app.css';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar'

import { useState , useEffect } from 'react';



    

const App = () => {

  const [ search, setSearch ] = useState([]); 
  const [ ABV, setABV ] = useState(false);
  const [ Range, setRange ] = useState(false);
  const [ Acidity, setAcidity ] = useState(false);
  let [ Data , setData ] = useState([])

  useEffect(() => {

    fetch('https://api.punkapi.com/v2/beers?&per_page=80')
    .then((response) => response.json())
    .then((json) => setData(json))

  },[])


  return (
    <div className="App">
      <div className='NavBarstyle'>
      <Navbar setSearch = {setSearch}
      setABV = {setABV}
      setRange = {setRange}
      setAcidity = {setAcidity}
      />
      </div>
      <div className='mainstyle'>
      <Main Data = {Data}
      search = {search}
      ABV = {ABV}
      Range = {Range}
      Acidity = {Acidity}
      />
      </div>
    </div>
  );
}


export default App;
