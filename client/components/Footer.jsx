import React from 'react';


const Footer = () => (
    <footer style={{paddingTop:'100px'}} >
        <div className="container text-center">
            <p>Copyright &copy; CloudDezk {(new Date().getFullYear())}</p>
        </div>
    </footer>
);

export default Footer;