import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-white text-yellow font-semibold  font-body py-2 px-6 rounded md:ml-8 hover:bg-text-yellow uppercase font-header 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button