import React from 'react'
import "./__FilterItems.scss"

const FilterItem = (props) => {
  const { setABV , setRange , setAcidity } = props;

const  ABVchange = event => {
  if (event.target.checked) {
    setABV(true);
  } else {
    setABV(false);
  }
}

const  Rangechange = event => {
  if (event.target.checked) {
    setRange(true);
  } else {
    setRange(false);
  }
}

const  Aciditychange = event => {
  if (event.target.checked) {
    setAcidity(true);
  } else {
    setAcidity(false);
  }
}

  return (
    <div className='checkBox'>
      <div className='abv'>
      <input type="checkbox" className="ABV" name="High ABV (6.0%)" onClick={ABVchange} />
      <label className="ABVlabel" for="ABV"> High ABV above (6.0%) </label>
      </div>
    <div className='range'>
      <input type="checkbox" className="Range" name="Classic Range" onClick={Rangechange} />
      <label className="Rangelabel" for="ABV"> Classic Range</label>
      </div>
      <div className='acidity'>
      <input type="checkbox" className="Acidity" name="Acidity (ph < 4)" onClick={Aciditychange} />
      <label className="Aciditylabel" for="ABV"> High Acidity above a ph of 4 </label>
      </div>
    </div>
  )
}

export default FilterItem