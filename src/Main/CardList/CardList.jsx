import React from 'react';
import './CardList.css';
import Card from './Card/Card';


const CardList = (props) => {

  let { Data, search, ABV, Range, Acidity } = props;

  const Filterbeer = Data.map(beer => {

    if ((Acidity === false) && (Range === false) && (ABV === false)) {

        if ((search === '')) { return <Card Data = {beer} />
  
        } else if (beer.name.includes(search) || beer.tagline.includes(search) || beer.description.includes(search) ) {
          return <Card Data = {beer}/>
      } 
    

    } else if ((Acidity === true) || (Range === true) || (ABV === true)) {

        if ((beer.ph <= 4) && (Acidity === true)) {
            return <Card Data = {beer}/>
          } else if (((beer.first_brewed.slice([3],[7]) - 2010) < 0) && (Range === true)) {
                return <Card Data = {beer}/>
          } else if ((beer.abv > 6) && (ABV === true)) {
            return <Card Data = {beer} />
          }
    }
  })
    
  return (
    <div className='cardGrid'>
    <div className='Filter'> {Filterbeer} </div>
    </div>
  )
}


export default CardList;