import React from 'react'
import Card from './Card'

const Grid = ({cars}) => {
  return (
    <div className='px-[5%] grid lg:grid-cols-4 grid-cols-1 gap-1 lg;py-5 py-[10%]'>
      {cars ? (<>
      
        {cars.slice().reverse().map((el, index) => {
          
          return (
            <Card key={index}
              title={el && el.title}
              make={el && el.make}
              model={el && el.model}
              year={el && el.year}
              city={el && el.city}
              transmission={el && el.transmission}
              fuel={el && el.fuel}
              rate={el && el.rate}
              cover={el && el.cover}
              id={el._id}
              link={`/details/${el._id}`}
            />
          );
        })}
      </>) : (<>Still no Cars</>)}
        
       
    </div>
  )
}

export default Grid