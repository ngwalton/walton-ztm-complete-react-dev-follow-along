import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  height: fit-content;
`;

export const CategoryTitle = styled.h1`
  text-transform: uppercase;
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
