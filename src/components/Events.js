import React from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaReact } from 'react-icons/fa'

export default function
    () {
    return (
        <div className='Events'>
            <div className='events-struct'>
                <div className='event-details'>
                    <p className='event-month'>
                        AUG
                    </p>
                    <p className='event-date'>
                        10
                    </p>
                </div>
                <p className='events-text'>
                    Emotional Intelligence Coach Practitioner
                </p>
                <button className='events-readmore'>
                    Read More
                    <FaArrowAltCircleRight className="icon-next" size={20}/>
                </button>
            </div>
            <div className='events-line'>
                <hr className='pro-line'>
                </hr>
            </div>
        </div>
    )
}
