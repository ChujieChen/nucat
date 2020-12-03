import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import { NavBar, Footer } from '../components'
import { EventsList, EventsInsert, EventsUpdate, About, EventInfo, CandidateList, CandidateInfo } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    // https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/app" exact component={CandidateList} />
                    <Route path="/app/events/create" exact component={EventsInsert} />
                    <Route
                        // path="/events/update/:id"
                        path="/app/events/update/"
                        exact
                        component={EventsUpdate}
                    />
                    <Route path="/app/about" exact component={About} />
                    <Route path="/app/event/:id" exact component={EventInfo} />
                    <Route path="/app/candidate/:id" exact component={CandidateInfo} />
                </Switch>
                <Footer className="footer" />
            </div>
        </Router>
    )
};


export default App