import React from 'react'

function Colorheader({handleRedmode}) {
  return (
    <div className='colorheader'>

        <button onClick={()=> handleRedmode((previousRedmode) => !previousRedmode) } className='save'>Color</button>
    </div>
  )
}

export default Colorheader