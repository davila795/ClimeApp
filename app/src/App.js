import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Clime from './components/Clime'
import Error from './components/Error'

function App() {

  const [search, setSearch] = useState({
    country: '',
    city: ''
  })

  const { country, city } = search

  const [consult, setConsult] = useState(false)

  const [result, setResult] = useState({})

  const [error, setError] = useState(false)

  useEffect(() => {

    const consultApi = async () => {
      if (consult) {

        const appId = 'abe89b5926b16d4033e77b74d567d07b'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`

        const response = await fetch(url)
        const result = await response.json()

        setResult(result)

        setConsult(false)

        result.cod === '404' ? setError(true) : setError(false)
      }
    }

    consultApi()
    // eslint-disable-next-line
  }, [consult])

  let component = error ? <Error message='No results' /> : <Clime result={result} />  //  Component contitional load

  return (
    <>
      <Header
        title='React Clime'
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
                setNoResultsError={setError}
                setResult={setResult}
              />
            </div>
            <div className='col m6 s12'>
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
