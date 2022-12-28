import React from 'react'
import '../hojas-de-estilo/Boton.css'

const Boton = (props) => {
    const esOperador = valor => {
        //si valor no es un numero y tampoco es un . y tampoco es es un signo igual
        return isNaN(valor) && (valor != '.') && (valor != '=');
        
    }
  return (
    // si es true (que la funcion operador cumpla con los requisitos) se va asignar la clase operador si es false va ser nulo no abra nada
    //trim metodo para eliminar espacios y End al final
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ' '}`.trimEnd()}
        onClick={()=> props.manejarClic(props.children)}> 
        
        {props.children}
        
    </div>
  )
}

export default Boton

// todo lo que esta en la funcion boton se va considera children(hijo) props.children

