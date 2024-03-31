// made by :- legcy

import React from 'react'

// gsap code 
export default function page(){
  return (
    <main>
        {
            [1,2,3,4,5].map((e)=>{
                return(
                    <div className='w-32 h-32 bg-red-500' key={e}>{e}</div>
                )
            })
        }
    </main>
  )
}
