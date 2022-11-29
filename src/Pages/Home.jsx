import React from 'react'
import SearchCoin from '../components/SearchCoin'

const Home = ({coins}) => {
  return (
    <div>
      <SearchCoin coins={coins}/>
    </div>
  )
}

export default Home