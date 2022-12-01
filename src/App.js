import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import {ThemeProvider} from './context/ThemeContext'
import {Home, Account, Signin, Signup, CoinPage } from './Pages';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  useEffect (()=> {
    axios.get(url).then((response)=> {
      setCoins(response.data)
      console.log(response.data)
    })
  }, [url])

  return (
   <ThemeProvider> 
    <AuthContextProvider> 
        <Navbar/>
        <Routes> 
          <Route path='/' element={<Home coins={coins} />} />
           <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
             <Route path='/account' element={<Account/>} />
          
             <Route path='/coin/:coinId' element={<CoinPage/>}> 
                <Route path=':coindId'/>
             </Route>
        </Routes>
      </AuthContextProvider>
   </ThemeProvider>
  );
}

export default App;
