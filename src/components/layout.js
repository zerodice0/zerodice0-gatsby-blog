import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import HeadNavigation from "./headNavigation"

function Layout(props) {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  const bioPath = `${__PATH_PREFIX__}/bio/`

  const Wrapper = styled.div`
  min-height: 100vh;`

  const Footer = styled.footer`
    text-align: center;
    margin: 24px;`

  const Header = styled.div`
    border-radius: 20px;
    padding: 1rem;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: #ffffff;
    box-shadow:  20px 20px 60px #d0d0d0d0,
                -20px -20px 60px #ffffff;    
  `

  const HeaderTitle = styled.h1`
    text-align:center;
  `

  const HeaderSubTitle = styled.h4`
    text-align:center;
  `

  const header = (
    <Header>
      <HeaderTitle>BlackBear's Archive</HeaderTitle>
      <HeaderSubTitle>
        <span role="img"
              aria-label="construction_icon">
          🚧
        </span>
        It is under construction now.
        <span role="img"
              aria-label="construnction_icon">
          🚧
        </span>
      </HeaderSubTitle>
      <HeadNavigation/>
    </Header>
  )

  return (
    <Wrapper>
      <div>
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Wrapper>
  )
}

export default Layout
