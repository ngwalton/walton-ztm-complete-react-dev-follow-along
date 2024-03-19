/* eslint-disable react/prop-types */
import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
