import CardList from "./CardList/CardList";
// import Data from "../Data/Data.js";


import React from 'react'

const Main = (props) => {


  return (
    <div>
    <CardList Data = {props.Data}
    search = {props.search}
    ABV = {props.ABV}
    Range = {props.Range}
    Acidity = {props.Acidity}/>
  </div>
    
    
  )
  }

export default Main;