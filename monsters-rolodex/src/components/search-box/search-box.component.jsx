// import { Component, React } from 'react'
import { React } from 'react'
import './search-box.styles.css'

// eslint-disable-next-line
const SearchBox = ({ className, id, onChangeHandler, placeholder }) => (
  <input
    className={className}
    type='search'
    id={id}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
)

// class SearchBox extends Component {
//   render () {
//     // eslint-disable-next-line
//     const { className, id, onChangeHandler, placeholder } = this.props

//     return (
//       <input
//         className={className}
//         type='search'
//         id={id}
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     )
//   }
// }

export default SearchBox
