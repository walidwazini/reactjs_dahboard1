import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Sidebar, Navbar, ThemeSettings } from './components'
import { useStateContext } from './contexts/ContextProvider'

import './App.css'
import {
  Orders, Ecommerce, Employees, Customers, Line,
  Calendar, Kanban, Editor, ColorPicker, Area,
} from './pages'

function App() {
  const { activeMenu, themeSetting,
    setThemeSetting, currentColor, currentMode } = useStateContext()

  return (
    <div className={currentMode === 'dark' ? 'dark' : ''} >
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg bg-main-bg' >
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }} >
            <TooltipComponent
              content='Settings' position='Top'
            >
              <button
                type='button'
                onClick={() => setThemeSetting(true)}
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white '
                style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>


          {/* SIDEBAR  */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}


          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? `md:ml-72` : 'flex-2'}
            `}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />

            </div>

            <div>
              {themeSetting && <ThemeSettings />}

              <Routes>
                {/* Dashboard  */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* Pages  */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps  */}
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts  */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element="Editor" />
                <Route path='/pie' element="Editor" />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </div >
  )
}

export default App
