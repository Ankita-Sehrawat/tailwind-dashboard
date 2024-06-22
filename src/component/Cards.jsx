import React from 'react'
import service1 from '../assets/Images/svg/service1.svg'

const arr = [
    {
        img: service1,
        title: "Cleaning",
        detail: "Experience the joy of a spotless home with our professional cleaning services. From regular maintenance to deep cleaning, we've got you covered."
    },
    {
        img: service1,
        title: "Repairing",
        detail: "Experience the joy of a spotless home with our professional cleaning services. From regular maintenance to deep cleaning, we've got you covered."
    },
    {
        img: service1,
        title: "Painting",
        detail: "Experience the joy of a spotless home with our professional cleaning services. From regular maintenance to deep cleaning, we've got you covered."
    },
    {
        img: service1,
        title: "Electrician",
        detail: "Experience the joy of a spotless home with our professional cleaning services. From regular maintenance to deep cleaning, we've got you covered."
    },
    {
        img: service1,
        title: "Plumbing",
        detail: "Experience the joy of a spotless home with our professional cleaning services. From regular maintenance to deep cleaning, we've got you covered."
    },
    {
        img: service1,
        title: "Mechanic",
        detail: "Experience the joy of a spotless home with our professional cleaning services. From regular maintenance to deep cleaning, we've got you covered."
    },
]



const Cards = () => {
    return (
        <div className='container '>
            <h1 className='text-3xl lg:text-[48px] font-medium text-center text-[#000F02]'>Our Range of <span className='text-[#00A015]'>Services</span> </h1>

            <div className="flex flex-wrap py-12">
                {arr.map((item, i) => {
                    return (
                        <div key={i} className="sm:w-6/12 lg:w-4/12 px-4 py-6">
                            <div className='rounded-[12px] border border-solid border-[#00000026]   text-center p-6 h-[100%] transition-all hover:bg-zinc-300 hover:shadow-[box-shadow: 0px 0px 32px 0px #00000029;
]'>
                                <img className='m-auto' src={item.img} alt="img" />
                                <h2 className='text-lg lg:text-2xl font-medium py-4'>{item.title}</h2>
                                <p className='text-sm lg:text-md text-[#000F02]'>{item.detail}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='text-center'>
                <button className='bg-[#00A015] py-2 lg:py-4 px-8 text-white fs-md font-medium rounded-[60px] border transition hover:bg-transparent hover:border border-solid border-[#00A015] hover:text-[#00A015] '>View All</button>
            </div>

        </div>
    )
}

export default Cards
