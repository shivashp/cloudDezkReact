import React from 'react';
import { Link } from 'react-router-dom';
// import Subscribe from './Subscribe.jsx';
// import Modal from 'react-bootstrap/lib/Modal';
// import Button from 'react-bootstrap/lib/Button';

// const Register = React.createClass({
//     render() {
//         return (
//             <Modal {...this.props} bsSize="large">
//                 {/*<Modal.Header closeButton>*/}
//                     {/*<Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>*/}
//                 {/*</Modal.Header>*/}
//                 <Modal.Body>
//                     <Subscribe />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button bsStyle="success">Submit</Button>
//                     <Button onClick={this.props.onHide}>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         );
//     }
// });

class Navigation  extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showRegister:false,
    //         showRolelink:false
    //     };
    // }

    render() {
        return <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div className="container" id="navbar-container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-main-collapse">
                        Menu <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                        <img src='/assets/img/logo.svg' /> CloudDezk
                    </a>
                </div>

                {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                <div className="collapse navbar-collapse navbar-main-collapse" id="navbar-center">
                    <ul className="nav navbar-nav">
                        {/*<!-- Hidden li included to remove active class from about link when scrolled up past about section -->*/}
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li>
                            <a className="page-scroll" href="/#scroll_about">About</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="/#scroll_cloudaccess">CloudAccess</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="/#scroll_contact">Contact</a>
                        </li>
                        {/*<li>*/}
                            {/*<a className="page-scroll" href="/#scroll_cloudaccess">CloudAccess</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<a className="page-scroll" href="/#scroll_subscription">Subscription</a>*/}
                        {/*</li>*/}
                        {/*/!*<li>*!/*/}
                            {/*/!*<a className="page-scroll" onClick={()=>this.setState({ showRegister: true })}>Register</a>*!/*/}
                            {/*/!*<Register show={this.state.showRegister}  onHide={()=>this.setState({ showRegister: false })} />*!/*/}
                        {/*/!*</li>*!/*/}
                        {/*<li>*/}
                            {/*<a className="page-scroll" href="/rolelink#top">Role link</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
                <div id="navbar-right">
                  <ul className="nav navbar-nav">
                    <li>
                        <Link className="page-scroll highlight-anchor" to="/register">Subscribe</Link>
                    </li>
                  </ul>
                </div>
                {/*<!-- /.navbar-collapse -->*/}
            </div>
            {/*<!-- /.container -->*/}
        </nav>
    }
}

export default Navigation;
