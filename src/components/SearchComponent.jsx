import React from 'react';
import '../styles/SearchComponent.css'

const SearchComponent = ({data, filter, handleChange}) => {

  return (
    <div className='search-bar'>
        <input  type="text" onChange={(e)=>handleChange(e)}/>
        <button onClick={filter}>Search</button>
    </div>
  )
}

export default SearchComponent