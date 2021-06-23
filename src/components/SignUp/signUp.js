import React,{Component} from 'react';
import './signUp.css';
class SignUp extends Component{
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email,this.state.password)
    }
    checkbox = (e) => {
        console.log("checked")
    }
    showPassword = (e) => {
        var x = document.getElementById("password")
        var y = document.getElementById("password1")
        if (x.type === "password") {
            x.type = "text";
            y.type = "text";
        }
        else {
            x.type = "password";
            y.type = "password";
        }
    }
    render(){
        return(
            <div className='form'>
                <p></p>
                <p className='p5'>
                    Sign Up
                </p>
                <form onSubmit={this.handleSubmit} className="white">
                        <div>
                            <p className='p3'>Email</p>
                            <input className="input-field" type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <p className='p3'>Password</p>
                            <input className="input-field" type="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <p className='p3'>Repeat Password</p>
                            <input className="input-field" type="password" id="password1" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input className='check' type="checkbox" id="showPassword" onClick={this.showPassword}/>
                            <label className='p4'>Show Password</label>
                        </div>
                        <div>
                            <button className="btn" id="submit">SIGN UP</button>
                        </div>
                    </form>
            </div>
        )
    }
    
}
    
export default (SignUp)