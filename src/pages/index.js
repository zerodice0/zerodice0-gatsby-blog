import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Button from "../components/button"

function IndexPage (props) {
  const siteTitle = "zerodice0's gatsby blog"
  
  return (
    <Layout location={props.location}
            title={siteTitle}>
    </Layout>


  )
}

export default IndexPage
