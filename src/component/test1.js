import '../views/App.css';
import React from 'react'
import {postUsers} from '../api/user'

class test1 extends React.Component {// test pour le post 

  constructor(props){
    super(props)

    this.state={
       users:[] //pour mettre le post qu'on va creer
    }
  
  }
  
  async postUser(){
    const user = JSON.stringify({name: this.state.name, firstname: this.state.firstname, email: this.state.email, password: this.state.password})
    const response = postUsers(user)
    this.state.users = user
    localStorage.setItem('users', this.state.users)
  }

  handleChange(e){
      e.preventDefault()
      let name = e.target.name
      this.setState({
          [name]: e.target.value
      })
  }

  render() {

    return (
        
      <div className="App">
            <h1>FORMULAIRE</h1>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
            <input type="text" name="firstname" value={this.state.firstname} onChange={(e) => this.handleChange(e)}/>
            <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)}/>
            <input type="text" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
            <input type="submit" value="Envoyer" onClick={(e) => this.postUser()}/>
      </div>
    )
  }


}

export default test1;