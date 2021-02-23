import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  border-radius: 8px;
  padding: 1.3rem;
  background: #f0f0f0;
  box-shadow: inset 4px 4px 40px #d9d9d9,
        inset -4px -4px 40px #f0f0f0;
`;

const LinkButton = styled(props => <Link {...props}/>)`
  padding: .6rem 1rem;
  margin-left: 0.5rem;
  margin-right: 0.3rem;
  background: #ffffff;
  box-shadow:  4px 4px 20px #c5c5c5,
              -4px -4px 20px #ffffff;
  border: 0px;
  border-radius: 10px;
  transition: .5s;
  color: black;

  &:first-child {
    margin-left: 0px;
  }

  &:focus {
    outline: none;
  }
  
  &:active {
    background: #f0f0f0;
    box-shadow: inset 1px 1px 10px #c5c5c5,
      inset -1px -1px 10px #ffffff;
  }
`

function HeadNavigation(props) {
  return (
    <NavigationWrapper>
      <LinkButton to="/blog">
        Blog
      </LinkButton>
      <LinkButton to="/bio">
        Bio
      </LinkButton>
    </NavigationWrapper>
  );
}

export default HeadNavigation