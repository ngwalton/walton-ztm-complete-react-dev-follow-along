import { Component, React } from 'react'
import './card-list.styles.css'

class CardList extends Component {
  render () {
    // eslint-disable-next-line
    const { monsters } = this.props

    return (
      <div className='card-list'>
        {
          // eslint-disable-next-line
          monsters.map(monster => {
            return <div key={monster.id}><h2>{monster.name}</h2></div>
          })
        }
      </div>
    )
  }
}

export default CardList
