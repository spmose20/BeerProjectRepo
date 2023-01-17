import FilterItem from './FilterItem/FilterItem';
import { useState } from 'react';



const FiltersList = (props) => {

  


  
  

  return (
    <div>
     


    <FilterItem  setABV = {props.setABV}
      setRange = {props.setRange}
      setAcidity = {props.setAcidity}/>

   
    </div>
  )
}

export default FiltersList