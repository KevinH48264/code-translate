import React from 'react'

import { withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

const RouteChangeTracker = props => {
    props.history.listen((location, action) => {
        console.log("Route Change Tracker Event Received!")
        ReactGA.set({ page: location.pathname })
        ReactGA.pageview(location.pathname)
    })

    return (
        <div>
            {props.children}
        </div>
    )
}

export default withRouter(RouteChangeTracker)