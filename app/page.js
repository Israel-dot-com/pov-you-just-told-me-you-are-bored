"use client"
import Nav from "./Nav"
import Image from "next/image";
import activityimg from "./activityimg.svg"
import moneyimg from "./moneyimg.svg"
import accessibilityimg from "./accessibilityimg.svg"
import peopleimg from "./peopleimg.svg"
import dothing from "./dothing.svg"
import React, { useEffect, useState } from 'react';
import Contact from "./component/contact"
import Skeleton from "./component/skeleton";

async function getData() {
  const res = await fetch("https://www.boredapi.com/api/activity/");
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Simulate fetching gallery data
    setTimeout(() => {
      setLoading(false); // Set loading state to false when data is fetched
    }, 50); // Adjust the delay as needed
  }, []);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getData();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTodos();
    
  }, []);
  return (
    <div id="home" className='bgimage object-contain min-h-screen '>
        <Nav />
        {loading? 
        <Skeleton />
        :
        <div  className='bg-white md:m-20 min-h-screen py-5 m-5 w-fit md:w-[40%] text-black flex flex-col gap-y-10 pt-5'>
            <div className='flex gap-x-7 px-5'>
                <div className="flex items-center">
                    <Image className="" src={dothing} alt="logo" width={25} height={25} />
                </div>
                
                <div className="">
                    <p>I think you should {todos.activity}</p>
                    
                </div>
                

            </div>


            <div className='flex gap-x-7 px-5'>
                <div>
                    <Image src={moneyimg} alt="logo" width={25} height={25} />
                </div>
                
                <div>
                    
                  {todos.price === 0 ? <p>This activity is free to do</p>: <p>It costs about ${todos.price} which is give or take, about ₦{todos.price*15}K to do that</p>}
                    
                </div>
                

            </div>
            <div className='flex gap-x-7 px-5'>
                <div>
                    <Image src={activityimg} alt="logo" width={25} height={25} />
                </div>
                
                <div>
                    <p>It is a {todos.type} type of activity</p>

                </div>
                

            </div>

            <div className='flex gap-x-7 px-5'>
                <div>
                    <Image src={accessibilityimg} alt="logo" width={25} height={25} />
                </div>
                
                <div>
                    <p>On a scale of 1 to 10 it's a {todos.accessibility*10} in terms of accessibility</p>

                </div>
                

            </div>

            <div className='flex gap-x-7 px-5'>
                <div>
                    <Image src={peopleimg} alt="logo" width={25} height={25} />
                </div>
                
                <div>
                    {todos.participants === 1 ? <p>It takes just {todos.participants} person to do this </p> : <p>It takes about {todos.participants} people to do this</p>}
                </div>


            </div>
        </div>

        }
        <Contact />

    </div>
  )
}
