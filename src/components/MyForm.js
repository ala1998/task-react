import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyForm = (props) =>
{
    return (
       <div className="container bg-light" style={{
         //  display:"flex",
           //position:"fixed",
           //width:"100%",
          /// height:"100%",
          //justifyContent: "center",
//          alignItems: "center",
         // backgroundSize: "cover",
      //   background: "#222 url('https://unsplash.it/1920/1080/?random') center center no-repeat"

        }}>
          <h1 className="text-center pt-2">Search for a drug...</h1>
        <Form className="p-3" onSubmit={props.handleSubmit}>
  <Form.Group>
  <Form.Label className="py-2 text-truncate text-info" >Drug Code</Form.Label> 
  <Form.Control name="drug" type="text" placeholder="Enter Drug Code" />
   
  </Form.Group>

  <Form.Group>
    <Form.Label  className="py-2 text-truncate text-info" >Disease Code</Form.Label>
    <Form.Control name="disease" type="text" placeholder="Enter Disease Code" />
  </Form.Group>
  
  <Form.Group>
    <Form.Label  className="py-2 text-truncate text-info" >Type</Form.Label>
    <select className="form-control" name="type">
  <option value="1">1</option>
  <option value="2">2</option>

</select>
  </Form.Group>
<br></br>
<Form.Group style={{textAlign:"center"}}> <Button className="btn btn-primary center-block btn-lg" variant="primary" type="submit" 
  style={{
      alignSelf:"center"
  }}>
    Submit
  </Button></Form.Group>
 
</Form>
</div>)
}

export default MyForm;
