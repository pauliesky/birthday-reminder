import React, { useState } from 'react'
import '../css/List.css'
import './Data'
// import 'bootstrap/dist/css/bootstrap.min.css'


const List = ({ people  }) => {

  // const [people, setPeople] = useState(Data);
  return (
    <div>
      {people.map((person) => {
        const { id, name, stack, image } = person
        return <article key={id} className='person'>
          <img src={image} alt={name}></img>
          <div className='details'>
            <h4>{name}</h4>
            <p>{stack}</p>

          </div>

        </article>
      })}
    </div>
  )
}

export default List
