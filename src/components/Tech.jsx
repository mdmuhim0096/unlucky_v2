import React from 'react'
import BallCanvas from './canvas/Ball';
import { secWrap } from '../hoc';
import { technologies } from '../constants';

function Tech() {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-50'>
        {
          technologies.map((ball) =>(
            <div className='w-28 h-28' key={ball.name}>
              <BallCanvas icon={ball.icon}/> 
            </div>
          ))
        }
      </div>
    </>
  )
}

export default secWrap(Tech, "")