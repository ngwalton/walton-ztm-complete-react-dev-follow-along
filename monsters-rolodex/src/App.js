// import { Component, React } from 'react'
import { useState, useEffect, React } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, []) // empty retrigger array mean this will only run once

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]) // update whenever monsters or searchField change

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        className='search-box'
        id='monster-search'
        onChangeHandler={onSearchChange}
        placeholder='Search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   // this is when you want to make an api request
//   // as soon as a component "mounts"
//   componentDidMount () {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => this.setState(() => {
//         return { monsters: users }
//       }))
//   }

//   filteredMonsters = () => {
//     const { monsters, searchField } = this.state
//     return monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField)
//     })
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase()
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render () {
//     const { onSearchChange, filteredMonsters } = this
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//           className='search-box'
//           id='monster-search'
//           onChangeHandler={onSearchChange}
//           placeholder='Search monsters'
//         />
//         <CardList monsters={filteredMonsters()} />
//       </div>
//     )
//   }
// }

export default App
