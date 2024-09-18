import React from 'react'

function Card(item) {
    console.log(item);
  return (
    <div>
        <p>
            {
               item.item.title
            }  
        </p>
    </div>
  )
}

export default Card