import { useState } from 'react';
import './App.css'

const API_ENDPOINT = 'https://hacker-news.firebase.com/v0';

function App() {
  
  const [items, setItems] = useState()

  return (
    <div className='app'>
      <h1>Hacker news job boards</h1>
      {
        items.length < 1 ? (
          <p className='loading'>loading...</p>
        ) : (
          <div>
            Job Listings
          </div>
        )
      }
    </div>
  )
}

export default App
