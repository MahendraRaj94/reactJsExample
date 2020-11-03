import React, { setState, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import Modal from 'react-bootstrap/Modal';

class Login extends Component {
   constructor(props){
     super(props);
     this.state = {
        email : this.props.location.state.email,
        mobileNumber : this.props.location.state.phone,
        show : false,
     };
   }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  onSubmitButtonClicked = () =>{
    this.setState(prev =>({
        show : true
    }));
  }

  render() {
    return (
    <div>
       <Modal show={this.state.show}>
         <Modal.Header >
           <Modal.Title>Modal title</Modal.Title>
         </Modal.Header>

         <Modal.Body>
           <p>Modal body text goes here.</p>
         </Modal.Body>

         <Modal.Footer>
           <Button variant="secondary">Close</Button>
           <Button variant="primary">Save changes</Button>
         </Modal.Footer>
       </Modal>
     <h1 className="row justify-content-center"> Login </h1>
      <div className="row justify-content-center">
       <div className="col-3">
           <Form>
             <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" value={this.state.email}/>
               <Form.Text className="text-muted">
                 {"We'll never share your email with anyone else."}
               </Form.Text>
             </Form.Group>
            <Form.Group controlId="formBasicEmail">
               <Form.Label>Phone Number</Form.Label>
               <Form.Control type="email" placeholder="Enter phone number" value={this.state.mobileNumber}/>
               <Form.Text className="text-muted">
                 {"We'll never share your mobile number with anyone else."}
               </Form.Text>
             </Form.Group>

             <Form.Group controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" />
             </Form.Group>
             <Form.Group controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
             </Form.Group>
             <Button variant="primary" onClick={this.onSubmitButtonClicked} type="submit">
               Submit
             </Button>
           </Form>
       </div>
      </div>
     </div>
    );
  }
}

export default Login;