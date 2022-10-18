import React from 'react'
import { HtmlEditor, Image, Inject , Link,
   QuickToolbar, RichTextEditorComponent , Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy' 
import { Header } from '../componenets'
import { useStateContext } from '../contexts/ContextProvider'

const Editor = () => {
  const {currentLanguage} = useStateContext()
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white mt-24">
      {currentLanguage=== 'Arbic' &&<Header category="تطبيق" title='المعدل' />}
      {currentLanguage=== 'English' &&<Header category="app" title='editor' />}
      <div>
        <RichTextEditorComponent>
          <EditorData />
          <Inject services={[HtmlEditor,Image, Link, QuickToolbar, Toolbar]} />
        </RichTextEditorComponent>
      </div>
    </div>
  )
}

export default Editor