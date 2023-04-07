import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Data from './Data'

function App() {
  return (
      <div className='app d-flex'>
        <Sidebar />
        <div className='main-view'>
          <Navbar />
          <Data />
        </div>
      </div>
  )
}

export default App