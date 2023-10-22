import React from 'react'

export default function skeleton() {
  return (
    <div className='bg-white md:m-20 min-h-screen py-5 m-5 w-fit md:w-[40%] text-black flex flex-col gap-y-10 pt-5'>
        <div className='flex gap-x-7 px-5'>
            <div className="skeleton-loader"></div>
            <div className="skeleton-lines">
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        <div className='flex gap-x-7 px-5'>
            <div className="skeleton-loader"></div>
            <div className="skeleton-lines">
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>

        <div className='flex gap-x-7 px-5'>
            <div className="skeleton-loader"></div>
            <div className="skeleton-lines">
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>

        <div className='flex gap-x-7 px-5'>
            <div className="skeleton-loader"></div>
            <div className="skeleton-lines">
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>

        <div className='flex gap-x-7 px-5'>
            <div className="skeleton-loader"></div>
            <div className="skeleton-lines">
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
  )
}
