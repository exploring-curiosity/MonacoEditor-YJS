import React,{useEffect, useState} from 'react';
import MonacoEditor from 'react-monaco-editor';

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { MonacoBinding } from 'y-monaco'

const SimpleMonacoEditor =(props)=>{
    const [language,setLanguage] = useState("javascript");
    const [theme,setTheme] = useState("vs-dark");
    // var flag = true;
    useEffect(()=>{
        setLanguage(props.language);
        setTheme(props.theme);
    },[props]);

    const editorDidMount = (editor, monaco) => {
        const ydocument = new Y.Doc()
        const provider = new WebsocketProvider('ws://localhost:5000', 'monakai', ydocument)
        const type = ydocument.getText('monaco')
       
        // Bind Yjs to the editor model
        const monacoBinding = new MonacoBinding(type, editor.getModel(), new Set([editor]), provider.awareness);
        editor.focus();
    }
    return (
        <MonacoEditor
            width="70%"
            height="70%"
            language={language}
            theme={theme}
            defaultValue=''
            editorDidMount={editorDidMount}
        />
    );
}

export default SimpleMonacoEditor;