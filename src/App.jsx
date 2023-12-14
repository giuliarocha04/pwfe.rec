import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function App() {

  const [data, setDados] = useState(false)
  const [alert, setAlert] = useState(false)
  

  function buscarDados(event) {
    event.preventDefault()
    const cep = event.target[0].value
    axios.get(`http://viacep.com.br/ws/${cep}/json`).then((resposta)=>setDados(resposta.data))
    .catch ((resposta)=>setAlert (true))
  



  }
  return (
  
    <div className="Container mt-5">

      <h2 className="text-center">Buscador de CEP</h2>
      <Form  onSubmit={buscarDados}>
        <Form.Control required/>
        <Button className="text-center mt-3" variant="primary" type="submit">Buscar</Button>
      </Form>

      <div>
      {data ? <ListGroup>
      <ListGroup.Item>cep: {data.cep}</ListGroup.Item>
      <ListGroup.Item>bairro: {data.bairro} </ListGroup.Item>
      <ListGroup.Item>complemento: {data.complemento ? data.complemento: "CEP sem complemento"}</ListGroup.Item>
      <ListGroup.Item>localidade: {data.localidade}</ListGroup.Item>
      <ListGroup.Item>logradouro: {data.logradouro}</ListGroup.Item>
      </ListGroup>: ""}
      {data ? <Alert className='mt-3'> CEP inválido </Alert>: ""}
    
    
        
      </div>

    </div>

       
    )
}

export default App