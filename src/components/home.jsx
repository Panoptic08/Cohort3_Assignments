import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
        <div>
            <div>
                <h1 className='text-center text-4xl text-white hover:scale-72 hover:text-blue-400  mt-10 cursor-pointer'>Assignments</h1>
            </div>
            <div className='bg-blue-400 h-2 mt-2 w-28 flex align-center justify-center rounded'style={{marginLeft: "45%"}}></div>
            <div className='flex mt-20' style={{marginLeft: "42%"}}>
                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3lqOW51MXlvdGNxeTE0cmY4dXBuYzgyM2U0eWQyb3ZxbnEydDh0dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bqQgHxblXfxVkBMd2P/giphy.webp" alt=""  className='h-64 rounded-xl '/>
            </div>
            <div className='flex flex-row justify-evenly mt-20'>
                <Link to="/web">
                <button  className='text-white text-xl border-2 py-3 px-4  border-blue-400  hover:scale-110 rounded-xl  hover:text-green-200'>WebDev & DevOps</button>
                </Link>
                <Link to="/web3">
                <button className='text-white text-xl border-2 py-3 px-4  border-blue-400  hover:scale-110 rounded-xl hover:text-green-200' >Web3</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Home
