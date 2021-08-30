import React from 'react'
import ShowCard from './ShowCard'

function ShowGrid({data}) {
    return (
        <div className='grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                data.map(({show})=> <ShowCard key={show.id} id={show.id}  image={show.image?show.image.medium:''} name={show.name} summary={show.summary} />)
            }
        </div>
    )
}

export default ShowGrid
