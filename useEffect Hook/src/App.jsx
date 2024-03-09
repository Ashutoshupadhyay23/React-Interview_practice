import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')

      if(!response.ok) {
        throw new Error('Response is not OK')
      }

      const fetcheddata = await response.json();
      setData(fetcheddata);

    } catch (error) {
      setError(error)

    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchData();
  }, [])



  return (
    <>
      <h1>useEffect Hook</h1>
      <h2>useEffect how does it work..</h2>

      <ul>
        {data.map((post) => {
          return <li key={post.id}>
            {post.title}
          </li>
        })}
      </ul>
    </>
  )
}

export default App
