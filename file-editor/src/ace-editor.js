// In order to keep editing check this link: https://github.com/securingsincity/react-ace/blob/master/example/index.js

import React from 'react';
import { render } from 'react-dom';
import 'brace';
import AceEditor from 'react-ace';

import 'brace/snippets/python';
import 'brace/mode/python';
import 'brace/theme/solarized_dark';

/*eslint-disable no-alert, no-console */
import "brace/ext/language_tools";
import "brace/ext/searchbox";

function onChange(newValue) {
  console.log('change',newValue);
}

function onLoad(newValue) {
    console.log('load',newValue);
}

// Render editor
render(
    <AceEditor
    placeholder="Placeholder Text"
    mode="python"
    theme="solarized_dark"
    name="blah2"
    onLoad={onLoad}
    onChange={onChange}
    fontSize={14}
    showPrintMargin={true}
    showGutter={true}
    editorProps={{
        $blockScrolling: Infinity
    }}
    highlightActiveLine={true}
    value={`class MyClass:
    def __init__():
        pass
      
    @staticmethod
    def increase(value):
      value +=1 
    `}
    setOptions={{
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    showLineNumbers: true,
    tabSize: 2,
    }}/>,
  document.getElementById('example')
);