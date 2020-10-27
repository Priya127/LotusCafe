import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Navbar1 from './Navigator';
import Footer from './FooterComponent';
import Card from './CardComponent';
import { MemberCard } from './MemberComponent';
import Subscribe from './MemberComponent';
import Amenities from './AmenitiesComponent';
import Contact from './ContactComponent';
import { MEMBERS } from '../shared/members';
import { CARDS } from '../shared/cards';
import { AMENITIES } from '../shared/amenities';
import Register from './auth/Register';
import Login from './auth/Login';
import Alert from './Alert';



export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS,
            members: MEMBERS,
            amenities: AMENITIES

        }
    }


    render() {
        const HomePage = () => {
            return (
                <React.Fragment>
                    <Header />
                    <Card cards={this.state.cards} />
                    <Amenities amenities={this.state.amenities} />
                    <MemberCard members={this.state.members} />
                    <Subscribe />
                    <Contact />
                </React.Fragment>

            );
        }
        return (
            <div className="App">
                <Navbar1 />
                <section>
                    <Alert />
                    <Switch>

                        <Route exact path='/' component={HomePage} />
                        <Route path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                        <Redirect to='/' />

                    </Switch>
                </section>
                <Footer />
            </div>);


    }

}


