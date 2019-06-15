import React, { Fragment } from 'react'
import Header from './Header'
import './Layout.css'

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
