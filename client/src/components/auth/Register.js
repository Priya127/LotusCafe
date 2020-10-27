import React, { Fragment, useState } from 'react';
import { Button, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/authAction';
import PropTypes from 'prop-types';


const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })


    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match!', 'danger')
        }
        else {
            register({ name, email, password })
        }
    };

    if (isAuthenticated === null) {
        return <Redirect to="/login" />
    }


    return (
        <Fragment>
            <div style={{
                backgroundImage: "url('assets/images/register.jpg')",
                backgroundSize: 'cover',
                width: '100%',
                height: '800px',
                marginBottom: '100px'

            }}>
                <div className='filter1'>
                    <div className='container regCont'>
                        <div className='row'>
                            <div className='login'>
                                <h2 className='sign'>Sign Up</h2>
                                <form className='form' onSubmit={onSubmit}>
                                    <div className='form-group'>
                                        <Input
                                            type='text'
                                            placeholder='Username'
                                            name='name'
                                            value={name}
                                            onChange={onChange}
                                            required />
                                    </div>
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
                                            required />
                                    </div>
                                    <div className='form-group'>
                                        <Input
                                            type='text'
                                            placeholder='Confirm Password'
                                            name='password2'
                                            value={password2}
                                            onChange={onChange}
                                            required />
                                    </div>
                                    <div className='form-group'>
                                        <Button type='submit' style={{ width: '150px' }} color="primary" value='Register'>Register </Button>{' '}
                                        <Button className='button' color="secondary" onClick={() => setFormData({ name: "", email: "", password: "", password2: "" })}>Cancel</Button>
                                    </div>
                                </form>
                                <br /><br />
                                <span className='spanColor'>Already have an account?</span>
                                <Button className='button'><Link style={{ color: 'white', textDecoration: 'none' }} to='/login'>Sign In</Link></Button>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated
})


export default connect(mapStateToProps, { setAlert, register })(Register);
//connect takes two parameters - first is any state to map,
//second , it takes any object with an action as here, this 
//will allow to use props.setAlert(msg,alertType)