import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from 'mathjs'; //modulo npm i mathjs

function App() {

  const [input, setinput] = useState('');

  const agregarInput = val => {
    setinput(input + val);

  }

  const calcularResultado = () => {
    if (input) {//confirmar si esta vacia va ser false o sino true
      setinput(evaluate(input))
      
    }else{
      alert("Por favor ingrese valores para realizar los calculos")
    }
    setinput(evaluate(input))
  }


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor"></div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className='fila'> 
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setinput('')}>
            Clear</BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
