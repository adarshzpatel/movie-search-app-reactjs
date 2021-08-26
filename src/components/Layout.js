import React from 'react'
import Nav from './Nav'

function Layout({children}) {
    return (
        <div className='flex flex-col items-center max-w-screen-lg mx-auto'>
            <h1>Movie Search App</h1>
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
