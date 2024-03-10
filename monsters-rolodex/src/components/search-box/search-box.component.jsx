import { Component, React } from 'react'

class SearchBox extends Component {
  render () {
    // eslint-disable-next-line
    const { className, id, onChangeHandler, placeholder } = this.props

    return (
      <input
        className={className}
        type='search'
        id={id}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    )
  }
}

export default SearchBox
