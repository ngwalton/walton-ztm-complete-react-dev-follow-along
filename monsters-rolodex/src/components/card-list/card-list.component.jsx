// import { Component, React } from 'react'
import { React } from 'react'
import Card from '../card/card.component.jsx'
import './card-list.styles.css'

// eslint-disable-next-line
const CardList = ({ monsters }) => (
  <div className='card-list'>
    {
      // eslint-disable-next-line
      monsters.map(monster => {
        return (
          <Card key={monster.id} monster={monster} />
        )
      })
    }
  </div>
)

// class CardList extends Component {
//   render () {
//     // eslint-disable-next-line
//     const { monsters } = this.props

//     return (
//       <div className='card-list'>
//         {
//           // eslint-disable-next-line
//           monsters.map(monster => {
//             return (
//               <Card key='' monster={monster} />
//             )
//           })
//         }
//       </div>
//     )
//   }
// }

export default CardList
