import React, { useState, Fragment } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Refresh } from '../actions/subscribe';
import { schedule } from '../actions/scheduleTour';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const Header = ({ schedule, Refresh, customer }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        date: new Date(),
        time: '9.00 AM'
    });

    const [show, setShow] = useState(false)



    const { fullName, email, date, time } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const toggleModal = () => {
        setShow(!show)
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        schedule({ fullName, email, date, time })
        setFormData({
            fullName: "",
            email: "",
            date: new Date(),
            time: "9.00 AM"

        })

        toggleModal();

    }


    if (customer) {
        let date = customer.date;
        date = date.slice(0, 10)
        if (customer.reset) {
            alert(`${customer.fullName},Your tour has been reset to be on ${date} at ${customer.time}!`)
        }
        else { alert(`${customer.fullName},Your tour is confirmed on ${date} at ${customer.time}!`) }

        Refresh()
        console.log(customer)
    }

    const myStyle = {
        background: "rgb(0,0,0,0.3) url(assets/images/mainpage3.jpg) ",
        backgroundSize: 'cover',
        width: '100%',
        height: '800px',
    }


    return (

        <Fragment>
            <div style={myStyle}>
                <div className='filColor'>
                    <div className='caption'>

                        <Spring from={{ opacity: 0, marginLeft: 0 }}
                            to={{ opacity: 1, marginLeft: 300 }} config={config.slow} >
                            {props => (
                                <div style={props}>
                                    <h2>WORK CREATE INSPIRE</h2>
                                    <h6>A PURPOSE DRIVEN WORKSPACE FOR CONTINUOS LEARNING</h6>
                                </div>)}
                        </Spring>
                        <Spring from={{ opacity: 0, marginLeft: 550, marginTop: 30 }}
                            to={{ opacity: 1, marginLeft: 350, marginTop: 30 }} config={config.slow}>
                            {props => (
                                <div style={props}>
                                    <Button className='success' onClick={toggleModal}>SCHEDULE TOUR</Button>
                                </div>)}
                        </Spring>

                    </div>

                    <Modal isOpen={show} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal} style={{ backgroundColor: 'rgb(64, 182, 64,0.9)' }}>Select Date and Time</ModalHeader>
                        <ModalBody>

                            <form onSubmit={onSubmit}>
                                <div className='form-group row'>
                                    <div>

                                        <input className='form-control' type='text' id='fname' name='fullName'
                                            value={fullName} placeholder='Full Name' onChange={onChange} />
                                    </div>

                                </div>
                                <div className='form-group row'>
                                    <div>

                                        <input className='form-control' type='email' id='email'
                                            name='email' value={email} placeholder='Email' onChange={onChange} />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label>{`Choose a date: `}</label>
                                    <DatePicker
                                        selected={date}
                                        onChange={date => { setFormData({ ...formData, date: date }) }}
                                        minDate={new Date()}
                                        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                                        dateFormat="MMMM d, yyyy" />
                                </div>
                                <div className='form-group row'>
                                    <label>{`Choose a time: `}</label>
                                    <select
                                        onChange={e => setFormData({ ...formData, time: e.target.value })}>
                                        <option value="9.00 AM">9.00 AM</option>
                                        <option value="9.30 AM">9.30 AM</option>
                                        <option value="10.00 AM">10.00 AM</option>
                                        <option value="10.30 AM">10.30 AM</option>
                                        <option value="11.00 AM">11.00 AM</option>
                                        <option value="11.30 AM">11.30 AM</option>
                                        <option value="2.00 PM">2.00 PM</option>
                                        <option value="2.30 PM">2.30 PM</option>
                                        <option value="3.00 PM">3.00 PM</option>
                                        <option value="3.30 PM">3.30 PM</option>
                                        <option value="4.30 PM">4.30 PM</option>

                                    </select>
                                </div>
                                <div className='form-group row'>
                                    <Button type='submit'>Confirm</Button>
                                    <Button onClick={toggleModal} className='button'>Cancel</Button>
                                </div>
                            </form>

                        </ModalBody>
                    </Modal>
                </div>
            </div>
        </Fragment>

    );
}



Header.propTypes = {
    Refresh: PropTypes.func.isRequired,
    schedule: PropTypes.func.isRequired,
    customer: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    customer: state.authReducer.customer
})


export default connect(mapStateToProps, { schedule, Refresh })(Header);