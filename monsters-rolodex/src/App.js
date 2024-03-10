import { Component, React } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

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
    const { monsters, searchField } = this.state
    return monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render () {
    const { onSearchChange, filteredMonsters } = this
    return (
      <div className="App">
        <SearchBox
          className='search-box'
          id='monster-search'
          onChangeHandler={onSearchChange}
          placeholder='Search monsters'
        />
        <CardList monsters={filteredMonsters()} />
      </div>
    )
  }
}

export default App
