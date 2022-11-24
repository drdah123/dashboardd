import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../componenets'
import { useStateContext } from '../contexts/ContextProvider'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
}

const ColorPicker = () => {
  const {currentLanguage}= useStateContext()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white mt-24'>
      {currentLanguage=== 'Arabic' &&<Header category="تطبيق" title='حامل الالوان' />}
      {currentLanguage=== 'English' &&<Header category="app" title='color-picker' />}
      <div className='text-center'>
        <div id='preview' className='mt-0'>
          <div className='flex justify-center items-center flex-wrap gap-[60px]'>
            <div>
              <p className='font-semibold text-2xl mt-20 mb-4'>لوح مضمن</p>
              <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
              />
            </div>
            <div>
              <p className='font-semibold text-2xl mt-20 mb-4'>لوح حامل</p>
              <ColorPickerComponent
              id='inline-pallete'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker