import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSetting } = useStateContext()

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0' >
      <div className='float-right h-screen dark:text-gray-200 bg-white
      dark:bg-[#484B52] w-400 ' >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className='font-semibold text-xl ' >Settings</p>
          <button
            type='button'
            onClick={() => setThemeSetting(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray '
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4  ' >
          <p className='font-semibold text-md ' >Theme Options</p>
          <div className='mt-4' >
            <input
              type='radio'
              id='light'
              name='theme'
              value={'light'}
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'light'}
            />
            <label className='ml-2 text-md cursor-pointer' htmlFor='light' >
              Light
            </label>
          </div>
          <div className='mt-4' >
            <input
              type='radio'
              id='dark'
              name='theme'
              value={'dark'}
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'dark'}
            />
            <label className='ml-2 text-md cursor-pointer' htmlFor='dark' >
              Dark
            </label>
          </div>
        </div>
        <div className='border-t-1 border-color p-4 ml-4' >
          <p className='font-semibold text-lg' >
            Theme Colors
          </p>
          <div className="flex gap-3 ">
            {themeColors.map((item, index) => (
              <TooltipComponent key={index}
                content={item.name} position='TopCenter'
              >
                <div className='relative mt-2 cursor-pointer flex gap-4 items-center ' >
                  <button
                    className='h-10 w-10 rounded-full cursor-pointer '
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white
                     ${item.color === currentColor ? 'block' : 'hidden'} `} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ThemeSettings