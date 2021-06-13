import React from 'react';
import Translate from './containers/Translate';
import Mobile from './containers/Mobile';
import { BrowserView, MobileView } from 'react-device-detect'

const App = () => (
  <div>
    <BrowserView>
      <Translate/>
    </BrowserView>
    <MobileView>
      <Mobile />
    </MobileView>
  </div>
  
)

export default App;
