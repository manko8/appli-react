import '../views/App.css';
import React from 'react'
import {getUsers} from '../api/user'

class Test2 extends React.Component {

  constructor(props){
    super(props)

    this.state={
       users:[]
    }
  
  }
  async componentDidMount (){
    const users = await getUsers()
    this.setState({
      users: users
    })
    console.log()
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
                    <input type="text" name="nom" value={this.state.nom} onChange={(e) => this.handleChange(e)}/>
                    <input type="text" name="age" value={this.state.age} onChange={(e) => this.handleChange(e)}/>
                    <ul>
                    {
                        this.state.users.map((u,i) =>{return <><li key={i}>{u.name}</li>
                        <li key={i}>{u.firstname}</li>
                        <li key={i}>{u.email}</li>
                        <li key={i}>{u.password}</li>
                        </>
                                                            
                        })
                    }
                    </ul>

                </div>
            )
  }


}

export default Test2;