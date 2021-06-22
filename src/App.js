import React, { useEffect } from 'react';
import { PageView, initGA } from './libs/tracking';
import Translate from './containers/Translate';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'typeface-roboto';

const App = () => {
  useEffect(() => {
    initGA("UA-199218131-3")  // Using Universal Analytics Version for www.codetranslate.app
    PageView()
  }, [])

  return (
    <Router>
      <Translate />
      <Helmet>
        <title>Code Translate</title>
        <meta name="description" content="Code Translate is a free tool to translate your code into another coding language. It is great for picking up the syntax of another language, and it integrates the latest open-source translation libraries. It is still in beta testing, but new features are rolling out everyday." />
      </Helmet>
    </Router>
  )
}

export default App;