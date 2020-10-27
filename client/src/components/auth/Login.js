import React, { Fragment, useState } from 'react';
import { Button, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/authAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        login(email, password);
    }

    if (isAuthenticated) {
        return <Redirect to='/home' />
    }

    return (
        <Fragment>
            <div style={{
                backgroundImage: "url('assets/images/mainpage1.jpg')",
                backgroundSize: 'cover',
                width: '100%',
                height: '800px',
                marginBottom: '100px'

            }}>
                <div className='filter2'>
                    <div className='row'>
                        <div className='login'>
                            <h2 className='sign'>Sign In</h2>
                            <form className='form' onSubmit={onSubmit}>

                                <div className='form-group'>
                                    <Input
                                        type='text'
                                        placeholder='Email Address'
                                        name='email'
                                        value={email}
                                        onChange={onChange}
                                        required />
                                </div>
                                <div className='form-group'>
                                    <Input
                                        type='text'
                                        placeholder='password'
                                        name='password'
                                        value={password}
                                        onChange={onChange}
                                        minLength='6'
                                        required />
                                </div>

                                <div className='form-group'>
                                    <Button type='submit' style={{ width: '150px' }} value="Login" color="primary">Sign In </Button>{' '}
                                    <Button className='button' color="secondary" onClick={() => setFormData({ email: "", password: "" })}>Cancel</Button>
                                </div>
                            </form>
                            <br /><br />
                            <span className='spanColor'>Don't have an account?</span>
                            <Button className='button'><Link style={{ color: 'white', textDecoration: 'none' }} to='/register'>Register</Link></Button>



                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);