import { Component, React } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // this is when you want to make an api request
  // as soon as a component "mounts"
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }))
  }

  filteredMonsters = () => {
    return this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render () {
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange={this.onSearchChange}
        />
        {
          this.filteredMonsters().map(monster => {
            return <div key={monster.id}><h2>{monster.name}</h2></div>
          })
        }
      </div>
    )
  }
}

export default App
