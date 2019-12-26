import React, {Component} from 'react';
import  MyForm from './components/MyForm';
import  Disease from './components/Disease';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  state = {
    id:"",
    description:"",
    drugCode:"",
    diseaseCode:"",
    type:""
  //  error:''
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    const drug=e.target.elements.drug.value;
    const disease=e.target.elements.disease.value;
    const type=e.target.elements.type.value;

    var url=`http://localhost:3000/api/interactions/${drug}/${disease}/${type}`;
    fetch(url,{ method: 'GET',
      headers: new Headers({
        'Content-Type' : 'application/json',
     //   'Accept':'application/xml'
      })
  
     /* body: JSON.stringify({
        description: 'desease1',
        drugCode: '016416ada',
        diseaseCode:'0441534drw',
        type:2
      
    })*/
      }).then(  (response)=> response.json() )
  .then((responseJson) => {
  //  console.log(responseJson)

    this.setState({
      id:responseJson.id,
      description:responseJson.description,
      drugCode:responseJson.drugCode,
      diseaseCode:responseJson.diseaseCode,
      type:responseJson.type
    })
    
 console.log(this.state)
  })
  .catch((error) => {
  
   // console.log(error)
  })
  

  }
  render = () =>{
    return  (
      <div>
       <MyForm handleSubmit={this.handleSubmit}/>
       <Disease id={this.state.id}
        description={this.state.description}
        drug_code={this.state.drug_code}
        disease_code={this.state.disease_code}
        type={this.state.type}
       // error={this.state.error}
       />
      </div>
    );
  }
}

export default App;
