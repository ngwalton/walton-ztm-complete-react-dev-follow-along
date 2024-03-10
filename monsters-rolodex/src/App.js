import { Component, React } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      monsters: [
        {
          name: 'Andy',
          id: 'alksdfjae'
        },
        {
          name: 'Sam',
          id: 'a;lskdfjaie'
        },
        {
          name: 'Bob',
          id: 'a;lsdkfje'
        }
      ]
    }
  }

  render () {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => {
            return <div key={monster.id}><h2>{monster.name}</h2></div>
          })
        }
      </div>
    )
  }
}

export default App
