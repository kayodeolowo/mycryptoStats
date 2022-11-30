import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Favourite = () => {
    const [coins, setCoins] = useState([])

  return (
    <div>
        <p> you done have click to add <Link to='/'> Click here to search </Link> </p>
    </div>
  )
}

export default Favourite