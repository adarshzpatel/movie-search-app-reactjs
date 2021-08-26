import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
{to:'/',text:'home'},
{to:'/starred',text:'starred'}
]
function Nav() {
    return (
        <nav>
          <ul>
              {LINKS.map((item)=>(
                  <li key={item.text}>
                      <Link to={item.to}>{item.text}</Link>
                  </li>
              ))}
            </ul>  
        </nav>
    )
}

export default Nav
