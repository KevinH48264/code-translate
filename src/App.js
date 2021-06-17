import React, { useEffect } from 'react';
import { PageView, initGA } from './libs/tracking';
import Translate from './containers/Translate';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    initGA("UA-199218131-2")  // Using Universal Analytics Version
    PageView()
  }, [])

  return (
    <Router>
      <Translate />
    </Router>
  )
}

export default App;