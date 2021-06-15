import React from 'react';
import Translate from './containers/Translate';
import ReactGA from 'react-ga';
import RouteChangeTracker from './components/RouteChangeTracker'
import { BrowserRouter as Router, useHistory, Route } from 'react-router-dom'

const code_translate_TRACKING_ID = "G-0C2J3575QX" // https://code-translate.herokuapp.com
// const codetranslateapp_TRACKING_ID = "G-CSK5JKES70" // https://codetranslateapp.herokuapp.com/
ReactGA.initialize(code_translate_TRACKING_ID, {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123 // placeholder
  }
})
ReactGA.pageview(window.location.pathname + window.location.search)

const App = () => {
  const history = useHistory()

  return (
    <Router>
      <RouteChangeTracker history={history}>
        <Route exact path="/" component={Translate}/>
      </RouteChangeTracker>
    </Router>
  )
}

export default App;


// {/* <RouteChangeTracker history={history}> */}
//         {/* <BrowserView> */}
//           {/* <Translate/> */}
//         {/* </BrowserView> */}
//         {/* <MobileView>
//           <Mobile />
//         </MobileView> */}
//       {/* </RouteChangeTracker> */}