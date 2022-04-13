import React from 'react'
import BookForm from './components/BookForm'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <main>
    <div className='container'>
     <BookForm/>
     <Footer/>
    </div>
    </main>
   

    </div>
  )
}

export default App