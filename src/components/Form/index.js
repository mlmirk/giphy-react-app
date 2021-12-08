import React, { useState } from 'react'

function Form(props) {
  const [search, setSearch] = useState('')

  const handleSubmit = e => {
    console.log('handleSubmit clicked');
    e.preventDefault();
    props.handleSubmit(search)
    setSearch('')
  };

  const handleChange = e => {
    console.log('handleChange clicked');
    const searchInput =  e.target.value
    setSearch(searchInput)
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchInput">Search:</label>
          <input
            id="searchInput"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <input type="submit" value="Search for gif" />
        </form>
      </>
    );
}

export default Form