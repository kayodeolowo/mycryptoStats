import React from 'react'
import Favourite from '../components/Favourite'

const Account = () => {
  return (
    <div>
      <div> 
        <div> 
          <h1> Account </h1>
            <div> 
              <p> Welcome, User </p>
            </div>
      </div>

      <div> 
        <button> Sign Out </button>
      </div>
     </div>
     <div> 
      <div> 
        <h1> Watch List </h1>
        <Favourite/>
      </div>
     </div>
    </div>
  )
}

export default Account