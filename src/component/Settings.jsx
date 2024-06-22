import React from 'react'

const Settings = () => {
    return (

        <div className='contai ner'>
            <div className='flex'>
                <div className='w-2/12 bg-slate-500 '></div>

                {/* text-[32px] */}
                <div className='w-10/12 bg-white p-4 shadow-gray-500 rounded-3xl'>
                    <p className='sm:text-2xl lg:text-[50px]   text-slate-400 font-medium'>SETTINGS / <span className='text-black'>General</span></p>
                    <p className='text-sm text-black'>Manager your platform Appearance</p>

                    <div className='border-t bg-[#000] border-solid mt-5 mb-10'></div>


                    <form >
                        <div className='flex xl:flex-row xl:gap-0 md:flex-col md:gap-5 '>
                            <div className='xl:w-6/12 md:w-full'>
                                <div className=' flex items-center gap-5'>
                                    <label className='w-3/12 text-base font-medi um ' htmlFor="title">Title:</label>
                                    <input className='w-7/12 border border-solid border-slate-400 rounded-3xl py-3 px-4 ' type="text" name="title" id="title" placeholder='Milkman’s Manager' />
                                </div>
                            </div>
                            <div className='xl:w-6/12 md:w-full '>
                                <div className=' flex items-center gap-5'>
                                    <label className='w-3/12 text-base font-medi um ' htmlFor="slogan">Slogan:</label>
                                    <input className='w-7/12 border border-solid border-slate-400 rounded-3xl py-3 px-4 ' type="text" name="slogan" id="slogan" placeholder='Enter your slogan here.' />
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-8 xl:flex-row xl:gap-0 md:flex-col md:gap-5'>
                            <div className='xl:w-6/12 md:w-full'>
                                <div className=' flex items-center gap-5'>
                                    <label className='w-3/12 text-base font-medi um ' htmlFor="url">Website URL:</label>
                                    <input className='w-7/12 border border-solid border-slate-400 rounded-3xl py-3 px-4 ' type='url' name="url" id="url" placeholder='example.com' />
                                </div>
                            </div>
                            <div className='xl:w-6/12 md:w-full'>
                                <div className=' flex items-center gap-5'>
                                    <label className='w-3/12 text-base font-medi um ' htmlFor="email">Email Address:</label>
                                    <input className='w-7/12 border border-solid border-slate-400 rounded-3xl py-3 px-4 ' type="text" name="email" id="email" placeholder='email@example.com' />
                                </div>
                            </div>
                        </div>

                        <div className='xl:w-9/12 mt-8 md:w-full'>
                            <div className=' flex items-center gap-5'>
                                <label className='xl:w-2/12 md:w-3/12 text-base font-medi um ' htmlFor="logo">Platform Logo:</label>
                                <div className='w-7/12 flex items-center gap-3' >
                                    <img className='w-[100px] h-[100px] object-cover object-center' src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y293fGVufDB8fDB8fHww" alt="img" />
                                    <a href="#">fgjghjgh</a>
                                </div>
                            </div>
                        </div>

                        <div className='xl:w-11/12 md:w-full mt-8'>
                            <div className=' flex items-center '>
                                <label className='xl:w-2/12 lg:w-3/12  md:w-4/12 text-base font-medi um ' htmlFor="">Platform Appearance:</label>
                                <div className='w-9/12 '>
                                    <div className='flex items-center gap-5'>
                                        <p>Primary color</p>
                                        <button className='rounded-3xl p-4  text-white bg-emerald-300 uppercase '>color primary</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>


                    <div className='border-t border-solid border-slate-400 mb-5 mt-10'></div>

                    <div className='xl:text-end md:text-center'>
                        <button className='rounded-3xl py-4 px-16 bg-slate-400 focus:text-white focus:bg-emerald-300 uppercase text-slate-600 '>Discard</button>
                        <button className='rounded-3xl py-4 px-16 bg-slate-400 focus:text-white focus:bg-emerald-300 uppercase text-slate-600 ms-5'>Updates</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Settings
