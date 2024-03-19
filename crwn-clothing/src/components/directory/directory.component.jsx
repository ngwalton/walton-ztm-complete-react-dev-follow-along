/* eslint-disable react/prop-types */
import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const prefix = 'shop';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: `${prefix}/hats`,
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: `${prefix}/jackets`,
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: `${prefix}/sneakers`,
  },
  {
    id: 4,
    title: `women's`,
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: `${prefix}/womens`,
  },
  {
    id: 5,
    title: `men's`,
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: `${prefix}/mens`,
  },
];

function Directory() {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
