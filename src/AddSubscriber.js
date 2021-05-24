import react, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
import {Link} from 'react-router-dom';


class AddSubscriber extends Component{

    constructor()
    {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmittedHandler = (e) => {
        e.preventDefault(); // prevent form to reload again after submit is pressed.
        this.props.addSubscriberHandler(this.state);
        this.setState({
            id: 0,
            name: '',
            phone: ''
        })
        this.props.history.push("/");
    }

    render(){
        const{name, phone} = this.state;  
        return (
            <div>
                <Header heading = "Add Subscriber"></Header>
                <div className="component-body-container">
                    <Link to="/"><button className="custom-btn">Back</button></Link>
                    <form className="subscriber-form" onSubmit={this.onSubmittedHandler.bind(this)}>
                        <label htmlFor="name" className="label-control">Name: </label>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}></input><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone: </label>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}></input><br/><br/>
                        <div className="subscriber-info-container">
                           <span className="subscriber-to-add-heading"> Subscriber to be added:</span><br/><br/>
                           <span className="subscriber-info">Name: {name}</span><br/> <br/>
                           <span className="subscriber-info">Phone: {phone}</span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
                
            </div>
        )
    }
}


export default AddSubscriber;