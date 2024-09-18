import React from 'react'
import { Link } from "react-router-dom"


function Webdev() {
    return (
        <>
         <div className='flex align-center justify-center mt-10'>
              
                <button  className='text-white text-2xl py-3 px-4  border-blue-400  hover:scale-110 rounded-xl  hover:text-green-200'>Week-Wise Assignments
                </button>
            
            </div>

            <div className='flex flex-row align-center justify-evenly mt-20'>
                <Link to="/week1">
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 1</h1>
                </Link>
                <Link to="/week2">
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 2</h1>
                </Link>
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 3</h1>
            </div>
            <div className='flex flex-row align-center justify-evenly mt-20'>
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 4</h1>
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 5</h1>
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 6</h1>
            </div>
            <div className='flex flex-row align-center justify-evenly mt-20'>
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 7</h1>
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 8</h1>
                <h1 className='text-xl text-white hover:scale-110 rounded-xl border-2 border-green-400 py-3 px-6  hover:text-green-200 cursor-pointer  '>Week 9</h1>
            </div>

          
        </>
    )
}

export default Webdev
