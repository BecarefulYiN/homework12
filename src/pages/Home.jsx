import * as React from 'react';
import Navbar from '../components/Navbar';
import ListOfGame from '../components/ListOfGame';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Home() {
  const location = useLocation();
  const [username, setusername] = useState();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    setusername(searchParams.get('UN'))
  })
  return (
    <div>
      <Navbar username={username}/>
      <ListOfGame />
    </div>
  )
}

export default Home
