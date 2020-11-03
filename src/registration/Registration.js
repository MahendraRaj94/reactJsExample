import React, { setState,Component } from 'react';
import './Registration.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Registration extends Component {
    // state,props, this,var
   constructor(props){
     super(props);
     this.state = {
        email : "",
        phoneNumber : "",
        show : false,
     };
   }

//   componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  onSubmitClicked = () => {
    this.props.history.push("/login",{email : this.state.email,
        phone : this.state.phoneNumber});
  }

  handleChange = (event) =>{
    this.setState(prev =>({
       ...prev,
       [event.target.name] : [event.target.value]
    }))
  }

  render() {
    return (
      <div>
        <h1 className="row justify-content-center"> Registration </h1>
        <div className="row justify-content-center">
               <div className="col-3">
                   <Form>
                     <Form.Group controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control
                       name={"email"}
                       onChange={this.handleChange}
                        value={this.state.email}
                        type="email"
                        placeholder="Enter email" />
                       <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                       </Form.Text>
                     </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                       <Form.Label>Phone number</Form.Label>
                       <Form.Control
                       name={"phoneNumber"}
                       value={this.state.phoneNumber}
                       onChange={this.handleChange}
                       type="number"
                        placeholder="Enter phone number" />
                       <Form.Text className="text-muted">
                         We'll never share your phone number with anyone else.
                       </Form.Text>
                     </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                     <Form.Group controlId="formBasicCheckbox">
                       <Form.Check type="checkbox" label="Check me out" />
                     </Form.Group>
                     <Button onClick={this.onSubmitClicked} variant="primary" type="submit">
                       Submit
                     </Button>
                   </Form>
               </div>
              </div>

      </div>
    );
  }
}

export default Registration;