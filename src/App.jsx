import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries';


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())

function App() {
  return (
    <>
      <Suspense fallback={<h1>Countries Loading...</h1>} > 
         <Countries countriesPromise = {countriesPromise}> </Countries>
      </Suspense>
     
    </>
  )
}

export default App











// components: dekhte same lage but data alada

//suspense: data load howar por component show korbe, na hole loading message dekhabe