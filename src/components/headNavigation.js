import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  border-radius: 4px;
  padding: 1rem;
  background: #dadada;
  box-shadow: inset 2px 2px 20px #afafaf,
        inset -2px -2px 20px #fafafa;
`;

const LinkButton = styled.button`
  padding: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.3rem;
  background: #e0e0e0;
  box-shadow:  6px 6px 30px #cecece,
              -6px -6px 30px #ffffff; 
  border: 1px solid rgba(215, 215, 215, .7);
  border-radius: 6px;
  transition: .5s;

  &:first-child {
    margin-left: 0px;
  }

  &:focus {
    outline: none;
  }
  
  &:active {
    background: #e0e0e0;
    box-shadow:  0px 0px 30px #cecece,
              -0px -0px 30px #ffffff;
  }
`

function HeadNavigation(props) {
  return (
    <NavigationWrapper>
      <LinkButton>
        Hello
      </LinkButton>
      <LinkButton>
        Bye
      </LinkButton>
    </NavigationWrapper>
  );
}

export default HeadNavigation