import { Component, React } from 'react'
import './card.styles.css'

class Card extends Component {
  render () {
    // eslint-disable-next-line
    const { id, email, name } = this.props.monster

    return (
      <div className='card-container' key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}/?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card
