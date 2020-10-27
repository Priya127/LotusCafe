import React, { Component, Fragment, useState } from 'react';
import { Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Refresh } from '../actions/subscribe';
import { subscribe } from '../actions/subscribe';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';



export class MemberCard extends Component {


    render() {
        Aos.init({ duration: 2000 });
        return (
            <React.Fragment>
                <div className='title'>
                    <h3 id='member'><strong>MEMBERSHIP PLANS</strong></h3>
                    <hr />
                </div>
                <div data-aos="fade-up" className='member'>
                    <div className='member1'>
                        {this.props.members.map(member => {
                            return (

                                <div style={{ marginLeft: '90px',backgroundColor: '#fff', marginTop:'10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>

                                    <img height='250px' width='360px' src={member.src} alt='none' />

                                    <div className='memberEach'>
                                        <h5><strong>{member.title}</strong></h5>
                                        <h6><b>{member.price}</b></h6>
                                        <p>{member.description}</p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </React.Fragment>



        );
    }
}
const Subscribe = ({ subscribe, Refresh, subscriber }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""

    })


    const { firstName, lastName, email } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    const onSubmit = async (e) => {
        e.preventDefault();
        subscribe({ firstName, lastName, email })
        setFormData({
            firstName: "",
            lastName: "",
            email: ""
        })
    }


    if (subscriber) {
        alert(`${subscriber.firstName},You have successfully subscribed to the newsletters!`)
        Refresh()
        console.log(subscriber)
    }



    return (
        <Fragment>
            <div className='container-slider' style={{ backgroundImage: "url('assets/images/slider.jpeg')", marginBottom: 100 }}>

                <div className='slider'>
                    <h4>Not ready to join but want to be in the know? Stay connected with our Newsletter</h4>

                    <form className='col-9 offset-md-1' onSubmit={onSubmit}>
                        <div className='form-group row'>
                            <div className='col-md-4'>
                                <label htmlFor="fname"></label>
                                <Input className=' form-control' type='text' id='fname' name='firstName'
                                    value={firstName} placeholder='First Name' onChange={onChange} />
                            </div>
                            <div class='col-md-4'>
                                <label htmlFor="lname"></label>
                                <Input className='form-control' type='text' id='lname'
                                    name='lastName' value={lastName} placeholder='Last Name'
                                    onChange={onChange} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-md-8'>
                                <label htmlFor="email"></label>
                                <Input className='form-control' type='email' id='email'
                                    name='email' value={email} placeholder='Email' onChange={onChange} />
                            </div>
                        </div>
                        <div className='form-group row '>
                            <Button type='submit' className='btn btn-lg btn-primary offset-md-3 mb-5'>SUBSCRIBE</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}


// 

Subscribe.propTypes = {
    Refresh: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    subscriber: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    subscriber: state.authReducer.subscriber
})


export default connect(mapStateToProps, { subscribe, Refresh })(Subscribe);