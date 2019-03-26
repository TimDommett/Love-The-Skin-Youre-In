import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import AccomodationsContainer from './accomodations/accomodations_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
// import AccomodationComposeContainer from './accomodations/accomodation_compose_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/accomodations" component={AccomodationsContainer} /> */}
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            {/* <ProtectedRoute exact path="/new_accomodation" component={AccomodationComposeContainer} /> */}
        </Switch>
    </div>
);

export default App;