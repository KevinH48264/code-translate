import React, { useEffect } from 'react';
import { PageView, initGA } from './libs/tracking';
import Translate from './containers/Translate';
import { BrowserRouter as Router } from 'react-router-dom'
import 'typeface-roboto';

const App = () => {
  useEffect(() => {
    initGA("UA-199218131-3")  // Using Universal Analytics Version for www.codetranslate.app
    PageView()
  }, [])

  return (
    <Router>
      <Translate />
    </Router>
  )
}

export default App;