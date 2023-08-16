import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Sidebar } from './components'
import { useStateContext } from './contexts/ContextProvider'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const { activeMenu } = useStateContext()

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg bg-main-bg' >
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }} >
            <TooltipComponent
              content='Settings' position='Top'
            >
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white '
                style={{ background: 'darkblue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'
            >
              <Sidebar />
            </div>
          ) : (
            <div
              className='w-0 dark:bg-secondary-dark-bg'
            >
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen 
            ${activeMenu ? `md:ml-72` : 'flex-2'}
            `}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
          </div>
        </div>
        <div>
          <Routes>
            {/* Dashboard  */}
            <Route path='/' element="ECommerce" />
            <Route path='/ecommerce' element="ECommerce" />

            {/* Pages  */}
            <Route path='/orders' element="ECommerce" />
            <Route path='/employees' element="ECommerce" />
            <Route path='/customers' element="ECommerce" />

            {/* Apps  */}
            <Route path='/kandan' element="kanban" />
            <Route path='/editor' element="Editor" />
            <Route path='/calendar' element="Editor" />
            <Route path='/color-picker' element="Editor" />

            {/* Charts  */}
            <Route path='/line' element="Editor" />
            <Route path='/area' element="Editor" />
            <Route path='/bar' element="Editor" />
            <Route path='/pie' element="Editor" />

          </Routes>
        </div>
      </BrowserRouter >
    </div >
  )
}

export default App
