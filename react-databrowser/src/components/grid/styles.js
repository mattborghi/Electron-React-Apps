import styled from 'styled-components';

export const GridView = styled.section`
  display: grid;
  align-content: flex-start;
  overflow-x: auto;
  grid-gap: 15px;
  padding: 15px;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(260px, auto));
`;

export const GridItem = styled.div`
  position: relative;
  height: 260px;
  background: ${({ checked, theme }) =>
    checked ? theme.brand.wash : theme.bg.border};
  padding: 10px;
  color: ${({ theme }) => theme.text};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
`;

export const Absolute = styled.div`
  position: absolute;
`;
