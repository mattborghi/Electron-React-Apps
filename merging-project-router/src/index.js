import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import InherentRiskPage from './inherent-risk.jsx'
import MonacoEditorPage from './monaco-editor.jsx'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={InherentRiskPage} />
        <Route path="/editor" component={MonacoEditorPage} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('main'))
