import styled from 'styled-components';

export const Main = styled.main`
  padding-left: 6%;

  @media screen and (min-width: 1024px) {
    padding-left: calc((100% - 940px)/2);
    padding-right: calc((100% - 940px)/2);
  }
`;
