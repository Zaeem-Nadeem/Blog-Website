import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    //   const [data, setData] = useState(null);

    //   useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //       .then(res => res.json())
    //       .then(data => setData(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);
    // const fun=async()=>{
    //     const val= await fetch('https://api.github.com/users/hiteshchoudhary')
    //     const res=await val.json()
    //     console.log(res)
    //     const data=setData(res)
    // }
    // useEffect(()=>{

    // fun()
    // },[])
    const data = useLoaderData()
    return (
        <div className='flex items-center flex-col gap-10 text-center m-4 bg-gray-800 text-white p-8 rounded-lg shadow-lg'>
            <div className="profile flex justify-around w-full items-center">
                <h1 className='text-4xl font-bold'>{data.name}</h1>
                <p className='text-2xl'>GitHub Followers: {data.followers}</p>
            </div>
            <img
                src={data.avatar_url}
                width={150}
                className='rounded-full border-4 border-white shadow-md'
                alt="Profile"
            />
        </div>
    );
}
export const fun = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

export default GitHub;
