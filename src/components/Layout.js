import React from 'react'
import Nav from './Nav'

function Layout({children}) {
    return (
        <div>
            <h1>Movie Search App</h1>
            <Nav/>
            <main>
            {children}
            </main>
        </div>
    )
}

export default Layout
