import React from 'react'
import { useStaticQuery, graphql } from "gatsby";

import "../scss/style.scss";
import Header from "./header";

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
        site {
            siteMetadata {
            title
            }
        }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

            <main>{children}</main>

        </>
    )
}


export default Layout;
