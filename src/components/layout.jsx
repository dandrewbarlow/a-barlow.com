import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from 'react-helmet';

import "../scss/style.scss";
import icon from '../images/icon.png'
import Header from "./header";

const Layout = (props) => {
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
            <Helmet>
                <title>{props.title}</title>
                <link rel="shortcut icon" href={icon} type="image/x-icon" />
            </Helmet>

            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

            <main>{props.children}</main>

        </>
    )
}


export default Layout;
