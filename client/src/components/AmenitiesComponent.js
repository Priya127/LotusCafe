import React from 'react';



export default function Amenities(props){
    
    const amenities = props.amenities.map(amenity => {
        
        return(
           <div className='features'> 
            <div className='icon'>
                <span><i className={amenity.icon}></i>
                    <h6>{amenity.text}</h6>
                </span>
            </div>
        </div>
        );
    })
    
   
    return (
            <React.Fragment>
                <div className='title'>
                    <h3><strong>AMENITIES</strong></h3>
                    <hr />
                </div>

                <div className='container-slider'style={{backgroundImage: "url('assets/images/amenities.jpg')"}}>
                <div>
                <div className='slider'style={{display:'flex',flexWrap:'wrap'}}>
                    {amenities}
                </div>
                </div>
                </div>
              
            </React.Fragment>);

    }        






