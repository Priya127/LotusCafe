import React, { Component } from 'react';


export default class Contact extends Component {


    render() {

        return (
            <React.Fragment>

                <h2 id='contact' className='title'>Find Us</h2>
                <hr />
                <div className='findUs'>
                    <div>
                        <h6>Address - 8766 Olive Dr. Garden Grove, CA 92840</h6>
                    </div>

                    <div>
                        <h6>Hours - Mon-Fri - 7.00 am - 7.00 pm</h6>
                    </div>
                </div>
                <div className='container' style={{ width: '100%', marginBottom: '100px' }}>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3318828.494714226!2d-122.39553808398858!3d35.675932064398076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s8766%20Olive%20Dr.%20Garden%20Grove%2C%20CA%2092840s%20Rd.%20South%20San%20Francisco%2C%20CA%2094080!5e0!3m2!1sen!2sus!4v1601326882319!5m2!1sen!2sus"
                        width="100%" height="400" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false"
                        tabindex="0" title='map'>
                    </iframe>


                </div>
            </React.Fragment>)
    }
}