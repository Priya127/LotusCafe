import React from 'react';


export default function Card(props) {
    const cards = props.cards.map(card => {
        // Aos.init(); data-aos="fade-up" 
        return (

            <div className='cube'>
                <h6>{card.title}</h6>
                <img className='img-cube' src={card.src} alt={card.alt} />
                <p>{card.description}</p>
            </div>);

    })

    return (
        <div>
            <div className='title'>
                <h2><strong>Welcome to Lotus Cowork Cafe!</strong></h2>
                <hr />
                <p className='subtitle'>A casual, comfortable and convenient coworking space with the benefit of a cafe and a colloborative
                community.
            </p>
            </div>
            <div className='cubeEach'>
                {cards}
            </div>
        </div>
    );
}

