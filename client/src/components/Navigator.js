import React, { Fragment, useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { NavLink, Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Spring } from 'react-spring/renderprops'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authAction';


const Navbar1 = ({ authReducer: { isAuthenticated }, logout }) => {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    const [navBk, setNavBk] = useState('navBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBk

    useEffect(() => {
        window.scrollTo(0, 0)
        const handleScroll = () => {
            const show = window.scrollY > 210
            if (show) {
                setNavBk('navBarSolid')
            }
            else {
                setNavBk('navBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const allLinks = (

        <Fragment>
            <NavbarBrand className='navBrand' href="/home"><img src="assets/images/lotus-white.png" className='logoImg' alt='none' />
                <span className='logoName'>LOTUS COWORK CAFE</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className='toggler' />
            <Collapse isOpen={isOpen} navbar>

                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' style={{ color: 'white' }} to='/home'> HOME </NavLink>
                    </NavItem>

                    <NavItem>
                        <HashLink className='nav-link' style={{ color: 'white' }} to="/home#member">MEMBERSHIP</HashLink>
                    </NavItem>

                    <NavItem>
                        <HashLink className='nav-link' style={{ color: 'white' }} to='/home#contact'>CONTACT</HashLink>
                    </NavItem>

                    <NavItem>
                        <Button className='success'><Link style={{ color: 'white', textDecoration: 'none' }} to='/login'>LOGIN</Link></Button>
                    </NavItem>

                    <NavItem>
                        <Button className='success'><Link style={{ color: 'white', textDecoration: 'none' }} to='/register'>REGISTER</Link></Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Fragment>);





    const guestLinks = (
        <Fragment>
            <NavbarBrand className='navBrand' href="/home"><img src="assets/images/lotus-white.png" className='logoImg' alt='none' />
                <span className='logoName'>LOTUS COWORK CAFE</span>
            </NavbarBrand>

            <NavbarToggler onClick={toggle} className='toggler' />
            <Collapse isOpen={isOpen} navbar>

                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' style={{ color: 'white' }} to='/home'> HOME </NavLink>
                    </NavItem>

                    <NavItem>
                        <HashLink className='nav-link' style={{ color: 'white' }} to="/home#member">MEMBERSHIP</HashLink>
                    </NavItem>

                    <NavItem>
                        <HashLink className='nav-link' style={{ color: 'white' }} to='/home#contact'>CONTACT</HashLink>
                    </NavItem>

                    <NavItem>
                        <Button className='btn btn-success'><a onClick={logout} style={{ color: 'white', textDecoration: 'none' }} href="#!">LOGOUT</a></Button>
                    </NavItem>


                </Nav>
            </Collapse>
        </Fragment>);



    return (
        <div >

            <Navbar className={navRef.current} dark expand='lg'>
                <Spring from={{ opacity: 0 }}
                    to={{ opacity: 1 }} config={{ duration: 2000, delay: 300 }} >
                    {props => (
                        <div style={props} className='container'>
                            <Fragment>{isAuthenticated === true ? guestLinks : allLinks}</Fragment>
                        </div>)}

                </Spring>
            </Navbar>

        </div>


    );
}



Navbar1.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    authReducer: state.authReducer
});
export default withRouter(connect(mapStateToProps, { logout })(Navbar1));
