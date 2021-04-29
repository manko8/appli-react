import React from 'react';
import '../views/App.css';

class Login extends React.Component {

    constructor (props){ // constructeur qui prend en parametre les proprietes de react.component
        super(props)

        this.state = { // state correspond a l'etat de l'application si une modif est faite, l'appli se rafraichie
            user : []
        }


    }
    handleChange(e){
        e.preventDefault()
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    render (){ // la vue de retour
        return( //a chaque changement de l'input la fonction handleChange recupere le name et la valeur de l'input, mets le nom dans la variable name puis affecter a la variable state le nom contenu dans name et la valeur de l'input, value affiche le contenu de la variable state correspondante
            <>
            <div class="sidenav">
                <div class="login-main-text">
                    <h2>Pictagram </h2>
                    <p>Connectez vous ou inscrivez vous pour entrer.</p>
                </div>
            </div>
            <div class="main">
                <h1>{this.state.login}</h1>
                <div class="col-md-6 col-sm-12">
                    <div class="login-form">
                    <form> 
                        <div class="form-group">
                            <label>Login</label><br/>
                            <input name="login" type="text" class="form-control" value={this.state.login} placeholder="Login" onChange={(e) => this.handleChange(e)}/>
                        </div><br/>
                        <div class="form-group">
                            <label>Mot de Passe</label><br/>
                            <input name="password" type="password" class="form-control" value={this.state.password} placeholder="Mot de Passe" onChange={(e) => this.handleChange(e)}/>
                        </div><br/>
                        <button type="submit" class="btn btn-black">Se Connecter</button>
                        <button type="submit" class="btn btn-secondary">S'inscrire</button>
                    </form>
                    </div>
                </div>
            </div>
            </>
            )
    }
}

export default Login