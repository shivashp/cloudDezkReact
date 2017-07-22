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
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-main-collapse">
                        Menu <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                        <i className="fa fa-play-circle"></i> <span className="light">CloudDezk</span>
                    </a>
                </div>

                {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul className="nav navbar-nav">
                        {/*<!-- Hidden li included to remove active class from about link when scrolled up past about section -->*/}
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li>
                            <a className="page-scroll" href="/#scroll_cloudaccess">WHAT WE DO</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="/register#top">REGISTER</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="http://52.38.150.145/dashboard">POLICY ADVISOR</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="http://52.89.225.211">POLICY SIMULATOR</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="/#scroll_about">ABOUT</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="/#scroll_contact">CONTACT</a>
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
                {/*<!-- /.navbar-collapse -->*/}
            </div>
            {/*<!-- /.container -->*/}
        </nav>
    }
}

export default Navigation;