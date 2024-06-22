import React from 'react'
import ice from '../assets/Images/png/ice_bg.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Images/svg/ice_logo.svg'
import search from '../assets/Images/svg/search_icon.svg'
import menu from '../assets/Images/svg/menu.svg'
import type_img1 from '../assets/Images/png/type_img1.png'
import type_img2 from '../assets/Images/png/type_img2.png'
import type_img3 from '../assets/Images/png/type_img3.png'
import type_img4 from '../assets/Images/png/type_img4.png'
import fire from '../assets/Images/svg/fire.svg'
import google from '../assets/Images/svg/google.svg'
import fb from '../assets/Images/svg/fb.svg'
import insta from '../assets/Images/svg/insta.svg'
import twitter from '../assets/Images/svg/twitter.svg'
import men from '../assets/Images/png/man.png'
import ice1 from '../assets/Images/png/ice1.png'
import ice2 from '../assets/Images/png/ice2.png'
import ice3 from '../assets/Images/png/ice3.png'
import ice4 from '../assets/Images/png/ice4.png'
import { useState } from 'react';
import Slider from "react-slick";



const Ice_cream = () => {

    const [num, setnum] = useState(0);

    let add = () => {
        setnum(num + 1)
    }
    let minus = () => {
        setnum(num - 1)
    }

    let arr = [
        { img: type_img1 },
        { img: type_img2 },
        { img: type_img3 },
        { img: type_img4 },
    ]

    const cards = [
        {
            img: ice1,
            flavour: "Mix Ice cream",
            price: "Rs. 199/-",
        },
        {
            img: ice2,
            flavour: "Chocolate Cup",
            price: "Rs. 129/-",
        },
        {
            img: ice3,
            flavour: "Barry Ice cream",
            price: "Rs. 109/-",
        },
        {
            img: ice4,
            flavour: "Strawberry Ice cream",
            price: "Rs. 149/-",
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    let slide_card = [
        {
            img: men,
            text: "Indulge in frozen bliss with our irresistible ice cream delights!"
        },
        {
            img: men,
            text: "Indulge in frozen bliss with our irresistible ice cream delights!"
        },
        {
            img: men,
            text: "Indulge in frozen bliss with our irresistible ice cream delights!"
        },
    ]


    return (
        <div className=' min-h-screen bg-ice_bg bg-cover ff_poppins  pt-12'>

            <div className="container">
                <Navbar expand="lg" className="bg-body-tertiary ">

                    <Navbar.Brand href="#home">
                        <img src={logo} alt="img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto flex items-center gap-[30px] lg:gap-[52px] ">
                            <Nav.Link className='font-semibold fs-[28px] text-white ff_inter max-lg:mt-0' href="#home">Home</Nav.Link>
                            <Nav.Link className='font-semibold fs-[28px] text-white ff_inter ' href="#home">Know Us</Nav.Link>
                            <Nav.Link className='font-semibold fs-[28px] text-white ff_inter ' href="#home">Close By</Nav.Link>
                            <Nav.Link href="#home">
                                <img src={search} alt="img" />
                            </Nav.Link>

                        </Nav>
                        <div className='hidden lg:block'>
                            <img src={menu} alt="img" />
                        </div>
                    </Navbar.Collapse>

                </Navbar>

                {/* hero section  */}
                <div className='mt-[110px]'>
                    <div className="flex justify-between">
                        <div className='w-6/12 '>
                            <h1 className='xl:text-[120px] text-[70px] text-white font-semibold'>Red Flower Ice-Cream </h1>
                            <p className='fs-[24px] text-white  font-medium opacity-75 my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className='flex gap-8'>
                                <button className='border border-solid border-[#fff] text-white rounded-[14px] py-[24px] px-[48px] text-[32px] font-normal focus:bg-[#FFFFFF1A] focus:backdrop-blur-[10px] focus:border-transparent  '>Order Now</button>
                                <button className='border border-solid border-[#fff] text-white rounded-[14px] py-[24px] px-[48px] text-[32px] font-normal focus:bg-[#FFFFFF1A] focus:backdrop-blur-[10px] focus:border-transparent  '>Book Table</button>
                            </div>
                        </div>

                        {/* slider_card */}
                        <div className='w-4/12'>
                            <div className=" w-[400px] h-[200px] bg-white rounded-[18px] ">
                           
                            </div>

                            {/* Choose Type: */}
                            <div >
                                <p className='text-[20px] font-medium text-white mt-12'>Choose Type:</p>

                                <div className='flex gap-[46px] mt-4'>
                                    {arr.map((item, i) => {
                                        return (
                                            <div key={i} className='w-2/12'>
                                                <div className="sml_box p-4 bg-[#FFFFFF26] rounded-xl backdrop-blur-[10px]  hover:bg-red-600">
                                                    <img src={item.img} alt="img" />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ice-cream cards  */}
                <div className=''>
                    <button className='text-[28px] font-medium bg-white px-[34px]  rounded-[42px] flex items-center ms-auto my-14'>Trendy
                        <img src={fire} alt="img" />
                    </button>

                    <div className='flex flex-wrap gap-[52px] justify-center'>
                        {cards.map((item, i) => {
                            return (
                                <div key={i} className='w-5/12'>
                                    <div className='cards border border-solid border-white py-[58px] px-[34px] rounded-[25px] text-[#fff] bg-[#FFFFFF1A] backdrop-blur-[10px] transition-all hover:bg-white hover:text-black hover:border-black'>
                                        <div className="flex">
                                            <div className="w-5/12">
                                                <img src={item.img} alt="img" />
                                            </div>

                                            <div className="w-7/12 ">
                                                <p className='font-medium text-[28px] '>{item.flavour}</p>
                                                <p className='text-[20px] mt-[18px]'>Order Type:</p>

                                                <div className='flex gap-8 mt-[18px]'>
                                                    <button className='border border-solid border-[#fff] rounded-[7px] py-2 px-7 text-[18px] '>On Table</button>
                                                    <button className='border border-solid border-[#fff] rounded-[7px] py-2 px-7 text-[18px] '>Delivery</button>
                                                </div>

                                                <div className="flex justify-between mt-[18px]">
                                                    <p className='text-[28px] '>{item.price}</p>

                                                    <div className='border border-solid border-[#fff] rounded-[11px] p-2 text-[14px] font-medium flex gap-[14px]'>
                                                        <p onClick={add} className='cursor-pointer'>+ 1 </p>
                                                        <p>{num}</p>
                                                        <p onClick={minus} className='cursor-pointer'>1 -</p>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Footer  */}
                <div className='flex justify-between py-[51px]'>
                    <p className='text-white text-[18px]'>Dropecreem.com© all right reserve</p>

                    <div className='flex gap-[48px] '>
                        <a target='_blank' href="https://www.google.com/">
                            <img src={google} alt="img" />
                        </a>
                        <a target='_blank' href="https://www.facebook.com/">
                            <img src={fb} alt="img" />
                        </a>
                        <a target='_blank' href="https://www.instagram.com/">
                            <img src={insta} alt="img" />
                        </a>
                        <a target='_blank' href="https://www.twitter.com/">
                            <img src={twitter} alt="img" />
                        </a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Ice_cream
