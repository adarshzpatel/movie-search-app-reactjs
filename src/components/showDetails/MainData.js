import React from 'react'
import ImageNotFound from '../ImageNotFound'
import { StarFilled } from '../show/ShowCard'

const MainData = ({image,rating,summary,tags,name}) => {
    return (
        <div>
            {image?(<img src={image.original} className='rounded-lg object-cover h-[500px]' alt="show-cover" />):(<ImageNotFound/>)}
            <div>
                <div>
                    <h1>{name}</h1>
                    <div className='flex items-center gap-1'>
                    <StarFilled  className='text-yellow-500  h-6'/>
                    <span>{rating.average || 'N/A'}</span>
                    </div>
                    <div className='text-gray-700' dangerouslySetInnerHTML={{__html:summary}}/>
                    <div>
                        Tags:{''}
                        <div>
                            {tags.map((tag,i)=>(
                                <span key={i}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainData
