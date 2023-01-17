import React from 'react';
import "./__searchBox.scss";


const SearchBox = (props) => {
  const {setSearch} = props;
 

  const change = event => {
    setSearch(event.target.value);
  }

  

  return (
    <div>
      <input type="text" className="search" name="search" onChange={change}/>

    </div>
  )
}

export default SearchBox