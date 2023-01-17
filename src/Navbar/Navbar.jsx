import React from 'react';
import FiltersList from './FiltersList/FiltersList';
import SearchBox from './SearchBox/SearchBox.jsx';
import './__Navbar.scss';

const Navbar = (props) => {
 
  
  return (
    <div className='NavBar'>
    <div className="searchBox">
    <SearchBox  setSearch = {props.setSearch}
    />
    </div>
    <div className="FiltersList">
    <FiltersList   
      setABV = {props.setABV}
      setRange = {props.setRange}
      setAcidity = {props.setAcidity}
      />
      </div>
    </div>
  )
}

export default Navbar