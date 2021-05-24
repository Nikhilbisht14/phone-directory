import react, {Component} from 'react';
// import { BrowserRouter, Route, Router } from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state = {
            subscriberList: [
                {
                    id: 1,
                    name: 'Nikhil',
                    phone: '11111'
                },
                {
                    id: 2,
                    name: 'Bisht',
                    phone: '22222'
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0){
            newSubscriber.id =  subscriberList[subscriberList.length - 1].id + 1;
        }else {
            newSubscriber.id = 1;
        }

        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
        console.log(this.state.subscriberList);
    }

    render(){
        return(
                <Router>
                    {/* <AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/> */}
                    {/* <ShowSubscribers subscriberList = {this.state.subscriberList}/> */}
                    <div className="main-container">
                    <Route exact path='/' render={(props) => <ShowSubscribers{...props} subscriberList = {this.state.subscriberList}/>}/>
                    <Route exact path='/add' render={({history},props) => <AddSubscriber{...props} history = {history} addSubscriberHandler = {this.addSubscriberHandler}/>}/>
                    </div>
                </Router>
        )
    }
}


export default PhoneDirectory;