import ReactDOM from 'react-dom';
import React from 'react';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Page_Landing1 from './components/Page_Landing1.jsx';
import Register from './components/Register.jsx';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
//Your initialization





function hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        console.log(hash);
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
        }, 0);
    }
}

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Navigation />

            <Switch>
                <Route exact path='/' component={Page_Landing1}/>
                <Route exact path='/register' component={Register}/>
            </Switch>

        <Footer />
    </div>
    </BrowserRouter>
,
  document.getElementById('root')
);
