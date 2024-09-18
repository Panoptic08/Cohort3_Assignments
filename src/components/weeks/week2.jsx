import React, { useEffect, useState } from 'react';

function Week2() {
    const [count, setCount] = useState(0);
    const [countN, setCountN] = useState(0);
    const [time, setTime] = useState("");
    const [fileContent, setFileContent] = useState("");
    const [clock, setClock] = useState(new Date());
    const [text, settext] = useState("");



    const set = ()=>{
        settext(`Waited for ${time}s`); 

    }
    const print = () => {
        setTimeout(() => {
           set()
        }, time);
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []); 

    const read = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target.result);
            };
            reader.readAsText(file);
        }
    };

  



    const inc = () => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 100) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 2000);
    };

    const start = () => {
        const interval = setTimeout(() => {
            setCountN((prevCount) => {
                if (prevCount < 100) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
            start();
        }, 2000);
    };

    return (
        <>
            <div className='flex flex-row align-center justify-evenly border-2 mt-10 rounded-xl w-7/12 px-4 py-4 cursor-pointer ml-64'>
                <a href="#easy">
                    <h1 className='text-2xl text-white hover:text-green-400'>Easy</h1>
                </a>
                <a href="#medium">
                    <h1 className='text-2xl text-white hover:text-blue-400'>Medium</h1>
                </a>
                <a href="#hard">
                    <h1 className='text-2xl text-white hover:text-yellow-400'>Hard</h1>
                </a>
            </div>
            <div className='flex flex-row justify-evenly mt-20'>
                <h1 className='text-2xl text-center text-white ml-5'>1. Counter using setInterval</h1>
                <h1 className='text-2xl text-center text-white'>2. Counter using setTimeout</h1>
            </div>
            <div className='flex flex-row justify-evenly mt-10'>
                <div className='text-center'>
                    <h1 className='text-white text-4xl mt-20 text-yellow-400'>{count}</h1>
                    <button className='text-4xl text-white mt-10 border-2 border-blue-400 px-20 py-2 rounded-xl hover:scale-110' onClick={inc}>Start</button>
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-4xl mt-20 text-yellow-400'>{countN}</h1>
                    <button className='text-4xl text-white mt-10 border-2 border-blue-400 px-20 py-2 rounded-xl hover:scale-110' onClick={start}>Start</button>
                </div>
            </div>
            <h1 className='text-2xl text-center text-white mt-20'>3. Reading in a File</h1>
            <div className='text-center ml-96 mt-5' style={{ marginLeft: "5%" }}>
                <input type="file" placeholder='Select File' className='border-2 border-blue-400 bg-blue-400 px-2 py-2 justify-center align-center' onChange={read} />
                <div className='h-20 text-white'>{fileContent && (
                    <div className='flex justify-evenly'>
                        <h1 className='text-white text-2xl'>File Content: </h1>
                        <h2 className='text-white text-2xl'>{fileContent}</h2>
                    </div>
                )}</div>
            </div>
            <div id='medium'>
                <h1 className='mt-20 text-4xl text-white text-center'>Medium</h1>
                <div className='flex flex-row justify-evenly mt-10'>
                    <h1 className='text-white text-center text-2xl mt-10'>1. Creating a Clock</h1>
                    <h1 className='text-white text-center text-2xl mt-10'>2. Creating a Clock</h1>
                </div>
                <div className='flex flex-row justify-evenly'>
                    <div className='text-4xl text-center text-white border-2 border-blue-400 w-96 py-20 rounded-full mt-10'>
                        <h1>{clock.toLocaleTimeString()}</h1>
                    </div>
                    <div className='justify-center align-center '>
                        <input
                            type="text"
                            placeholder='Time:'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className='text-black border-2 border-black text-xl text-center rounded px-4 mt-10 py-3'
                        />
                        <button className='text-black text-2xl border-2 border-black py-2 px-4 bg-blue-400 rounded hover:scale-110' onClick={print}>Start</button>
                        <div className='ml-20 mt-20'>
                            <h1 className='text-white text-2xl'>{time && (
                                <div>
                                    <h1 className='text-white text-2xl'>{
                                        time && (
                                            <div>
                                                <h1>
                                                    {text}
                                                </h1>
                                            </div>
                                        )
                                        }</h1>
                                </div>
                            )}</h1>
                        </div>
                    </div>
                </div>
                <div className='h-96'></div>
            </div>
        </>
    );
}

export default Week2;
