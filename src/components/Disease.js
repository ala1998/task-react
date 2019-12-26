import React from 'react'
import Table from 'react-bootstrap/Table'
const Disease = (props) => {
console.log(props)
       //This && operator does like check a condition before && and if true continue to excute what after it
    return (
      <div className="container">
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Description</th>
      <th>Type</th>

    </tr>
  </thead>
  <tbody>
    <tr >
      <td>{props.id}</td>
      <td>{props.description}</td>
      <td>{props.type}</td>

    </tr>
    
  </tbody>
</Table>
</div>

    )   
}

export default Disease;