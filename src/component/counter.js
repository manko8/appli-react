import React from 'react';

class Counter extends React.Component {

    constructor (props){ // constructeur qui prend en parametre les proprietes de react.component
        super(props)

        this.state = { // state correspond a l'etat de l'application si une modif est faite, l'appli se rafraichie
            value : 0
        }
    }

    render (){ // la vue de retour
        return(
            <div>
                <h1>{this.state.value}</h1> 
                <button onClick={()=>{this.setState({value : this.state.value + 1})}}></button>
                <button onClick={()=>{this.setState({value : this.state.value - 1})}}></button>
            </div>
        )
    }
}

export default Counter