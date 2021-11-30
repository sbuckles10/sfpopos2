import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from '../sfpopos-data.js'
import { useState } from 'react'



  function POPOSList() {
    const [ query, setQuery ] = useState('')
    const spaces = data
  .filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()) || obj.address.includes(query))
  .map(({id, title, address, images, hours }) => {

    return (
      <POPOSSpace
        id={id}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="POPOSList">
			<form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			{spaces}
    </div>
  )
}

export default POPOSList
