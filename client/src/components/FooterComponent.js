import React from 'react';


export default function Footer() {

    return (

        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8 social'>
                        <a href="http://facebook.com/" >
                            <i className="fa fa-facebook size"></i></a>
                        <a href="http://twitter.com/" >
                            <i className="fa fa-twitter size"></i></a>
                        <a href="http://instagram.com/"><i className="fa fa-instagram size"></i></a>
                    </div>
                </div>
                
                <div className='col-md-7 footerAddress' >
                    <img src="assets/images/lotus-white.png" height='50px' width='50px' alt='none'  />
                    <span style={{marginLeft:'5px'}}>Lotus Cowork Cafe  8766 Olive Dr. Garden Grove, CA 92840.</span>
                </div>

            </div>
        </footer>


    );

}