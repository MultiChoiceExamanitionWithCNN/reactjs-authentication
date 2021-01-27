import React from 'react';

class SignupForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      valid: false
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
    const send = {
      username : this.state.input.name,
      password : this.state.input.password
    };

    if(this.validate()){
      //console.log(this.state);
      this.props.handle_signup(event ,send)
      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({input:input});

      alert('submited');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] !== input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors,
        valid : isValid
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h1>signup</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              placeholder="Enter name" 
              id="name" />
  
              <div>{this.state.errors.name}</div>
          </div>
  
          <div>
            <label>Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              placeholder="Enter email" 
              id="email" />
  
              <div>{this.state.errors.email}</div>
          </div>
   
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              placeholder="Enter password" 
              id="password" />
  
              <div>{this.state.errors.password}</div>
          </div>
  
          <div>
            <label>Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div >{this.state.errors.confirm_password}</div>
          </div>
              
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm;