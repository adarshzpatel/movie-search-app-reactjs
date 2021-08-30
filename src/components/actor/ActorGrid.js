import React from 'react'
import ActorCard from './ActorCard'

function ActorGrid({data}) {
    return (
        <div className="grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map(({ person }) => (
          <ActorCard
            key={person.id}
            id={person.id}
            image={person.image ? person.image.medium : ""}
            name={person.name}
            country={person.country ? person.country.name : null}
            birthday={person.birthday}
            deathday={person.deathday}
            gender={person.gender} 
          />
        ))}
        
      </div>
    )
}

export default ActorGrid
