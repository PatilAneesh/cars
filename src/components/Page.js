import React, { useEffect, useState } from 'react'
import './Page.css';

function Page() {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([])
    const handlChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleClick = () => {
        window.open('https://www.bigboytoyz.com/')
    }
    useEffect(() => {
        fetch('http://localhost:4040/cars')
            .then(res => res.json())
            .then(dt => {
                console.log(dt)
                setData(dt)
            })
            .catch(er => console.log('err', er))

    }, []);
    return (
        <div className='mainpage'>
            <div className='centerpage'>
                <div className='search'>
                    <input value={searchInput} onChange={handlChange} placeholder='search'></input>
                </div>

                <div className='box d-flex flex-wrap' id='content'>
                    {
                        data.filter((val) => {
                            if (searchInput === "") {
                                return val;
                            } else if (val.description.toLowerCase().includes(searchInput.toLowerCase())) {
                                return val;
                            }
                        })
                            .map((val) => {
                                return (
                                    <div className='innerbox  p-5'>
                                        <img onClick={handleClick} src={val['image-url']} alt='img' />
                                        <p className='contentdetails'>{val.description}</p>
                                        <p className='price'>Price ${val.price}</p>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Page
