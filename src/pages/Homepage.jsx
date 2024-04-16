import landingImage from '../assets/HeaderImage.jpg';
import {TypeAnimation} from 'react-type-animation';
import profile from '../assets/profile.jpg';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import linkedin from  '../assets/linkedin.png';
import menu_Bar from '../assets/menu_bar.png';
import drop_arrow from '../assets/down_arrow.png';
import ui_ux from '../assets/ui_ux.png';
import frontend from '../assets/frontend_image.png';
import backend from '../assets/backend.png';
import mobiledev from '../assets/moniledev.png';
import dataAnalysis from '../assets/data_analysis.png';
import download from '../assets/download.png';
import stars from '../assets/star.png';
import left_arrow from '../assets/arrow_left.png';
import right_arrow from '../assets/right_arrow.png';
import call from '../assets/call.png';
import mail from '../assets/mail.png';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function HomePage(){
    const [dropDown, setDropDown] = useState(false);
    const handleDropDown = () =>{
        setDropDown(!dropDown);
    }

    const handleSlide = () =>{
        const slide_container = document.querySelector('.slide_container');
        const slideButtons = document.querySelectorAll('.slider_wrapper .slide_button')

        slideButtons.forEach(button => {
            button.addEventListener('click', () => {
                const direction = button.id === 'prev' ? -1 : 1;
                const scrollAmount = slide_container.clientWidth * direction;
                slide_container.scrollBy({left: scrollAmount, behavior: 'smooth'})
            })
        })
    }
    window.addEventListener('load', handleSlide);

    const scrollAboutMe = () =>{
        const aboutMe = document.querySelector('.about_Me')
        const aboutMePosition = aboutMe.offsetTop;
        window.scrollTo({
            top: aboutMePosition,
            behavior: 'smooth'
        })
    }

    const scrollServices = () => {
        const services = document.querySelector('.services');
        const servicesPosition = services.offsetTop;
        window.scrollTo({
            top: servicesPosition,
            behavior: 'smooth'
        })
    }
    const scrollSummary = () => {
        const summary = document.querySelector('.summary');
        const summaryPosition = summary.offsetTop;
        window.scrollTo({
            top: summaryPosition,
            behavior: 'smooth'
        })
    }
    const scrollMyWork = () => {
        const myWork = document.querySelector('.mywork');
        const myWorkPosition = myWork.offsetTop;
        window.scrollTo({
            top: myWorkPosition,
            behavior: 'smooth'
        })
    }
    const scrollContact = () => {
        const contact = document.querySelector('.contact');
        const contactPosition = contact.offsetTop;
        window.scrollTo({
            top: contactPosition,
            behavior: 'smooth'
        })
    }
    const scrollTestimonial = () => {
        const testimonial = document.querySelector('.testimonial');
        const testimonialPosition = testimonial.offsetTop;
        window.scrollTo({
            top: testimonialPosition,
            behavior: 'smooth'
        })
    }

    const navigateToFacebook = () => {
        window.location.href = 'https://www.facebook.com/johnebube.enyi.7';
      };
      const navigateToTwitter = () => {
        window.location.href = 'https://twitter.com/EbubeJohnEnyi';
      };
      const navigateToGitHub = () => {
        window.location.href = 'https://github.com/ebubejohnenyi?tab=repositories';
      };
      const navigateToInstagram = () => {
        window.location.href = 'https://www.instagram.com/ebube_john_enyi/';
      };

      useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://smtpjs.com/v3/smtp.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const sendEmail = (event) => {
        event.preventDefault();

        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ebubejohnenyi@gmail.com",
            Password: "2822E8FAC461E4443B59510227FF7184DC66",
            To: 'ebubejohnenyi@gmail.com',
            From: document.getElementById('mail').value,
            Subject: "New Contact Form Enquiry",
            Body: "Name: " + document.getElementById('name').value
                    + "<br> Email: " + document.getElementById('mail').value
                    + "<br> Message: " + document.getElementById('message').value

        }).then(
            message => alert("Message Send Successfully")
            // console.log("Hellooo")
        ).catch(
            error => console.error(error)
        );
    };

      
    return(
        <>
        <section className="md:grid md:grid-cols-7 lg:grid lg:grid-cols-7">
            <section className="bg-black flex md:justify-center lg:justify-center md:text-center lg:text-center sm:w-screen md:top-0 md:left-0 md:right-0 md:bottom-0 md:w-56 lg:w-56 fixed z-10">
                <div className="md:mt-10 lg:mt-10 sm:flex md:block w-screen sm:justify-between p-2">
                    <div className="hidden md:block lg:block rounded-full overflow-hidden w-48 h-48 border-8 border-red-900">
                        <img src={profile} alt="Profile"></img>
                    </div>
                    <p className="name">Ebube John Enyi</p>
                    <div className={`md:block lg:block ${dropDown ? 'block absolute bg-black w-screen top-10 pt-4 pl-3 pb-4 animate-slide-in-down duration-500' : 'hidden'}`} >
                        <p className="side_bar_text">Home</p>
                        <p onClick={scrollAboutMe} className="side_bar_text">About Me</p>
                        <p onClick={scrollServices} className="side_bar_text">What I Do</p>
                        <p onClick={scrollSummary} className="side_bar_text">Resume</p>
                        <p onClick={scrollMyWork} className="side_bar_text">Portfolio</p>
                        <p onClick={scrollTestimonial} className="side_bar_text">Testimonial</p>
                        <p onClick={scrollContact} className="side_bar_text">Contact</p>
                    </div>
                    <div className="flex md:m-2 lg:m-2 absolute sm:left-32 sm:bottom-4 sm:ml-24 md:left-0 lg:left-0 md:ml-12 lg:ml-12 bottom-0 justify-center">
                        <Link onClick={navigateToFacebook}>
                            <img className='bg-white rounded-full w-5 ml-2 cursor-pointer' src={facebook} alt='FaceBook'></img>
                        </Link>
                        <Link onClick={navigateToTwitter}>
                            <img className='bg-white rounded-full w-5 ml-2 cursor-pointer' src={twitter} alt='Twitter'></img>
                        </Link>
                        <Link onClick={navigateToInstagram}>
                            <img className='bg-white rounded-full w-5 ml-2 cursor-pointer' src={linkedin} alt='Instagram'></img>
                        </Link>
                        <Link onClick={navigateToGitHub}>
                            <img className='bg-white rounded-full w-5 ml-2 cursor-pointer' src={github} alt='Github'></img>
                        </Link>
                    </div>
                    <div onClick={handleDropDown}>
                        <img className="w-7 cursor-pointer md:hidden lg:hidden sm:mt-2" src={menu_Bar} alt='Menu Bar'></img>
                    </div>
                </div>
            </section>
            <section className="col-span-7 relative">
                <div className="overlay"></div>
                <div className="flex justify-center items-center h-screen bg-fixed bg-cover bg-center" style={{backgroundImage: `url(${landingImage})`}}>
                    <div className="w-3/4 absolute text-center md:left-60 lg:left-60">
                        <h3 className="text-white text-2xl font-semibold">Welcome</h3>
                        <div className="middle_text">
                            <TypeAnimation
                                sequence={[
                                    "I'm Ebube John Enyi",
                                    2000, 
                                    "I'm a Frontend Developer.",
                                    2000,
                                    "I'm a Backend Developer.",
                                    2000,
                                    "I'm a Software Engineer.",
                                    2000,
                                    "I'm a Mobile App Developer.",
                                    2000
                                ]}
                                wrapper="span"
                                speed={30}
                                style={{ fontSize: '15', textAlign:'center' }}
                                repeat={Infinity}
                                />
                        </div>
                        <p className="text-white text-2xl sm:text-xl">based in Lagos State, Nigeria.</p>
                        <button className="btn" onClick={scrollContact}>Hire Me</button>
                        <div className='animate-bounce w-fit h-12 absolute left-1/2 top-3/4 md:mt-52 lg:mt-52 sm:mt-80 cursor-pointer'>
                            <img className="w-5" src={drop_arrow} alt='Drop Down'></img>
                        </div>
                    </div>
                </div>
                <section className="about_Me md:ml-56 lg:ml-56 mt-20">
                    <div className='flex justify-center'>
                        <div className="relative">
                            <h2 className='sm:text-7xl md:text-9xl lg:text-9xl font-sans font-bold text-gray-300/45'>ABOUT ME</h2>
                            <div className="absolute top-0 left-0 right-0 bottom-0 sm:mt-5 md:mt-12 lg:mt-12">
                                <h2 className="text-4xl font-bold text-center">Know Me More</h2>
                                <div className="flex justify-center">
                                    <p className="border-b-2 mt-2 border-green-500 text-center w-20"></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <section className="mt-10">
                        <div className='p-4 md:flex lg:flex md:justify-center lg:justify-center'>
                            <div className='text-lg md:w-3/4 lg:w-3/4 sm:text-center md:text-left lg:text-left'>
                                <h2 className="font-sans text-3xl font-bold">I'm <span className="text-green-500/50 md:text-4xl lg:text-4xl sm:text-3xl font-sans font-bold">Ebube John Enyi,</span> a Software Engineer</h2>
                                <p className="mt-3 font-sans">I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="mt-3 font-sans">Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                            </div>
                            <div className='w-fit sm:mt-10 md:mt-0 lg:mt-0'>
                                <div className="flex border-b-2 p-2">
                                    <label className='label_name'>Name:</label>
                                    <p className="m-1 text-lg text-gray-500">Ebube John Enyi</p>
                                </div>
                                <div className="flex border-b-2 p-2">
                                    <label className='label_name'>Email:</label>
                                    <p className="m-1 text-lg text-green-500">ebubejohnenyi@gmail.com</p>
                                </div>
                                <div className="flex border-b-2 p-2">
                                    <label className='label_name'>Age:</label>
                                    <p className="m-1 text-lg text-gray-500">23</p>
                                </div>
                                <div className="flex border-b-2 p-2">
                                    <label className='label_name'>From:</label>
                                    <p className="m-1 text-lg text-gray-500">UDI, Enugu State</p>
                                </div>
                                <div className="md:flex md:justify-center lg:flex lg:justify-center mt-5">
                                    <button className="m-2 bg-green-500/85 shadow-xl text-white font-sans p-4 w-48 rounded-full hover:bg-green-400/85 transition-all ">Download CV</button>
                                </div>
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-2 justify-items-center md:grid-cols-4 lg:grid-cols-4 m-10'>
                            <div className="text-center border-r sm:border-b md:border-b-0 lg:border-b-0 pb-5 border-gray-300 sm:w-40 md:w-56 lg:w-56">
                                <h1 className='text-6xl font-mono text-gray-400'>2+</h1>
                                <p className="aboutMe_text">Year Experience</p>
                            </div>
                            <div className="text-center sm:border-b md:border-b-0 lg:border-b-0 md:border-r pb-5 border-gray-300 sm:w-40 md:w-56 lg:w-56">
                                <h1 className='text-6xl font-mono text-gray-400'>20+</h1>
                                <p className="aboutMe_text">Happy Clients</p>
                            </div>
                            <div className="text-center border-r pb-3 border-gray-300 sm:w-40 md:w-56 lg:w-56">
                                <h1 className='text-6xl font-mono text-gray-400'>10+</h1>
                                <p className="aboutMe_text">Project Done</p>
                            </div>
                            <div className="text-center pb-3 border-gray-300 sm:w-40 md:w-56 lg:w-56">
                                <h1 className='text-6xl font-mono text-gray-400'>1+</h1>
                                <p className="aboutMe_text">Get Award</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className='services bg-gray-100 pb-3 md:ml-56 lg:ml-56 mt-20'>
                    <div className='flex justify-center'>
                        <div className="relative">
                            <h2 className='sm:text-7xl md:text-9xl lg:text-9xl font-sans font-bold text-gray-300/45'>SERVICES</h2>
                            <div className="absolute top-0 left-0 right-0 bottom-0 sm:mt-5 md:mt-12 lg:mt-12">
                                <h2 className="text-4xl font-bold text-center">What I Do?</h2>
                                <div className="flex justify-center">
                                    <p className="border-b-2 mt-2 border-green-500 text-center w-20"></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-2 md:ml-10 md:mr-10 lg:grid lg:grid-cols-2 lg:ml-10 lg:mr-10  mt-10'>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-28 md:w-12 lg:w-12' src={ui_ux} alt="UI/UX"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">UI/UX</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                            </div>
                        </div>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-28 md:w-12 lg:w-12' src={frontend} alt="Frontend Developer"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">Frontend Developer</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                            </div>
                        </div>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-28 md:w-12 lg:w-12' src={backend} alt="Backend Developer"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">Backend Developer</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                            </div>
                        </div>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-28 md:w-12 lg:w-12' src={mobiledev} alt="Mobile App Developer"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">Mobile App Developer</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                            </div>
                        </div>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-28 md:w-12 lg:w-12' src={dataAnalysis} alt="Data Analysis"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">Data Analysis</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="summary md:ml-56 lg:ml-56 mt-20">
                    <div className='flex justify-center'>
                        <div className="relative">
                            <h2 className='sm:text-7xl md:text-9xl lg:text-9xl font-sans font-bold text-gray-300/45'>SUMMARY</h2>
                            <div className="absolute top-0 left-0 right-0 bottom-0 sm:mt-5 md:mt-12 lg:mt-12">
                                <h2 className="text-4xl font-bold text-center">Resume</h2>
                                <div className="flex justify-center">
                                    <p className="border-b-2 mt-2 border-green-500 text-center w-20"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:mt-14 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                        <div className='sm:m-3 md:m-10 lg:m-5'>
                            <div>
                                <label className="text-2xl font-bold text-black/85">My Education</label>
                                <div className="border border-gray-300 p-3 rounded-lg mt-5">
                                    <p className="bg-green-400/95 w-fit pl-3 pr-3 rounded text-white font-thin">2023 - 2024</p>
                                    <p className="text-xl font-semibold mt-2">Software Engineering</p>
                                    <p className="text-red-500 text-lg mt-2">Semicolon Africa</p>
                                    <p className="text-lg mt-4">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                                </div>
                            </div>
                            <div>
                                <div className="border border-gray-300 p-3 rounded-lg mt-5">
                                    <p className="bg-green-400/95 w-fit pl-3 pr-3 rounded text-white font-thin">2019 - 2022</p>
                                    <p className="text-xl font-semibold mt-2">Business Administration and Management</p>
                                    <p className="text-red-500 text-lg mt-2">Institution of Management and Technology</p>
                                    <p className="text-lg mt-4">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                                </div>
                            </div>
                        </div>

                        <div className='sm:m-3 md:m-10 lg:m-5'>
                            <div>
                                <label className="text-2xl font-bold text-black/85">My Experience</label>
                                <div className="border border-gray-300 p-3 rounded-lg mt-5">
                                    <p className="bg-green-400/95 w-fit pl-3 pr-3 rounded text-white font-thin">Jan 2024 - Mar 2024</p>
                                    <p className="text-xl font-semibold mt-2">Full Stack Developer</p>
                                    <p className="text-red-500 text-lg mt-2">Cyber Buddies</p>
                                    <p className="text-lg mt-4">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                                </div>
                            </div>
                            <div>
                                <div className="border border-gray-300 p-3 rounded-lg mt-5">
                                    <p className="bg-green-400/95 w-fit pl-3 pr-3 rounded text-white font-thin">Oct 2023 - Jan 2024</p>
                                    <p className="text-xl font-semibold mt-2">Software Engineering - Capstone Project</p>
                                    <p className="text-red-500 text-lg mt-2">Semicolon Africa</p>
                                    <p className="text-lg mt-4">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-5">
                        <h2 className="text-2xl font-bold text-black/85">My Skills</h2>
                        <div className="sm:block md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                            <div className="mr-5">
                                <div>
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">Web Development</p>
                                        <p className="text-lg font-semithin text-gray-300">95%</p>
                                    </div>
                                    <div className="bg-gray-200 rounded-full">
                                        <p className='bg-green-400 h-2 rounded-full mr-16'></p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">React Js</p>
                                        <p className="text-lg font-semithin text-gray-300">80%</p>
                                    </div>
                                    <div className="bg-gray-200 rounded-full">
                                        <p className='bg-green-400 h-2 rounded-full mr-36'></p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">HTML & CSS</p>
                                        <p className="text-lg font-semithin text-gray-300">95%</p>
                                    </div>
                                    <div className="bg-gray-200 rounded-full">
                                        <p className='bg-green-400 h-2 rounded-full mr-16'></p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">Java Script</p>
                                        <p className="text-lg font-semithin text-gray-300">80%</p>
                                    </div>
                                    <div className="bg-gray-200 rounded-full">
                                        <p className='bg-green-400 h-2 rounded-full mr-36'></p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">Tailwind CSS</p>
                                        <p className="text-lg font-semithin text-gray-300">90%</p>
                                    </div>
                                    <div className="bg-gray-200 rounded-full">
                                        <p className='bg-green-400 h-2 rounded-full mr-28'></p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="md:ml-5 lg:ml-5 sm:mt-3 md:mt-0 lg:mt-0">
                                    <div>
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">Java</p>
                                            <p className="text-lg font-semithin text-gray-300">90%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-28'></p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">Python</p>
                                            <p className="text-lg font-semithin text-gray-300">80%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-44'></p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">React Native</p>
                                            <p className="text-lg font-semithin text-gray-300">80%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-36'></p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">Data Analysis</p>
                                            <p className="text-lg font-semithin text-gray-300">64%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-64'></p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">MySQL</p>
                                            <p className="text-lg font-semithin text-gray-300">64%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-64'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="border-2 border-gray-200 hover:bg-slate-500 hover:text-white transition-all p-3 w-48 rounded-full flex justify-center cursor-pointer mt-12">
                            <button className='mr-3 text-gray-400 hover:bg-slate-500 hover:text-white transition-all'>Download CV</button>
                            <img className='w-4 h-4 mt-1' src={download} alt="Download CV"></img>
                        </div>
                    </div>
                </section>
                <section className="mywork md:pb-10 md:ml-56 lg:ml-56 mt-20 bg-gray-100/45 pt-12">
                    <div className='flex justify-center'>
                        <div className="relative">
                            <h2 className='sm:text-7xl md:text-9xl lg:text-9xl font-sans font-bold text-gray-300/45'>PORTFOLIO</h2>
                            <div className="absolute top-0 left-0 right-0 bottom-0 sm:mt-5 md:mt-12 lg:mt-12">
                                <h2 className="text-4xl font-bold text-center">Projects</h2>
                                <div className="flex justify-center">
                                    <p className="border-b-2 mt-2 border-green-500 text-center w-20"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={navigateToGitHub} className="w-52 mt-10 font-semibold p-4 rounded-full text-white bg-green-500/70 shadow-lg send_message">EXPLORE PROJECT</button>
                    </div>
                </section>
                <section className='testimonial md:ml-56 lg:ml-56 mt-20'>
                    <div className='flex justify-center'>
                        <div className="relative">
                            <h2 className='sm:text-6xl md:text-9xl lg:text-9xl font-sans font-bold text-gray-300/45'>TESTIMONIAL</h2>
                            <div className="absolute top-0 left-0 right-0 bottom-0 sm:mt-3 md:mt-12 lg:mt-12">
                                <h2 className="text-4xl font-bold text-center">Client Speak</h2>
                                <div className="flex justify-center">
                                    <p className="border-b-2 mt-2 border-green-500 text-center w-20"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slider_wrapper'>
                        <div className="slide_container flex overflow-hidden  mt-10">
                            <div className="md:m-4 lg:m-4 bg-gray-100/65 p-5 sm:w-full md:w-45 lg:w-45 rounded-xl resize-none flex-none">
                                <div className="flex">
                                    <div className="w-20 h-20 overflow-hidden rounded-full">
                                        <img src={profile} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Retnaa Dayok</p>
                                        <p className='text-gray-500/85'>Software Engineer from Nigeria</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg sm:w-96 md:w-fit lg:w-fit">"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et."</p>
                                </div>
                                <div className="flex mt-5">
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                </div>
                            </div>
                            <div className="md:m-4 lg:m-4 bg-gray-100/65 p-5 sm:w-full md:w-45 lg:w-45 rounded-xl flex-none">
                                <div className="flex">
                                    <div className="w-20 h-20 overflow-hidden rounded-full">
                                        <img src={profile} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Retnaa Dayok</p>
                                        <p className='text-gray-500/85'>Software Engineer from Nigeria</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg sm:w-96 md:w-fit lg:w-fit">"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et."</p>
                                </div>
                                <div className="flex mt-5">
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                </div>
                            </div>
                            <div className="md:m-4 lg:m-4 bg-gray-100/65 p-5 sm:w-full md:w-45 lg:w-45 rounded-xl flex-none">
                                <div className="flex">
                                    <div className="w-20 h-20 overflow-hidden rounded-full">
                                        <img src={profile} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Retnaa Dayok</p>
                                        <p className='text-gray-500/85'>Software Engineer from Nigeria</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg sm:w-96 md:w-fit lg:w-fit">"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et."</p>
                                </div>
                                <div className="flex mt-5">
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                </div>
                            </div>
                            <div className="md:m-4 lg:m-4 bg-gray-100/65 p-5 sm:w-full md:w-45 lg:w-45 rounded-xl flex-none">
                                <div className="flex">
                                    <div className="w-20 h-20 overflow-hidden rounded-full">
                                        <img src={profile} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Retnaa Dayok</p>
                                        <p className='text-gray-500/85'>Software Engineer from Nigeria</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg sm:w-96 md:w-fit lg:w-fit">"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et."</p>
                                </div>
                                <div className="flex mt-5">
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                </div>
                            </div>
                            <div className="md:m-4 lg:m-4 bg-gray-100/65 p-5 sm:w-full md:w-45 lg:w-45 rounded-xl flex-none">
                                <div className="flex">
                                    <div className="w-20 h-20 overflow-hidden rounded-full">
                                        <img src={profile} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Retnaa Dayok</p>
                                        <p className='text-gray-500/85'>Software Engineer from Nigeria</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg sm:w-96 md:w-fit lg:w-fit">"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.Lisque persius interesset his et."</p>
                                </div>
                                <div className="flex mt-5">
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center m-0">
                                <div className='flex justify-between w-44'>
                                    <img id='prev' onClick={handleSlide} className='slide_button w-8 cursor-pointer' src={left_arrow} alt='Left Arrow'></img>
                                    <img id='next' onClick={handleSlide} className='slide_button w-8 cursor-pointer' src={right_arrow} alt='Right Arrow'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section  className='contact md:ml-56 lg:ml-56 mt-20'>
                    <div className='flex justify-center'>
                        <div className="relative">
                            <h2 className='sm:text-6xl md:text-9xl lg:text-9xl font-sans font-bold text-gray-300/45'>CONTACT</h2>
                            <div className="absolute top-0 left-0 right-0 bottom-0 sm:mt-3 md:mt-12 lg:mt-12">
                                <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
                                <div className="flex justify-center">
                                    <p className="border-b-2 mt-2 border-green-500 text-center w-20"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-5 md:m-10 lg:grid lg:grid-cols-5 lg:m-10">
                        <div className='col-span-1'>
                            <div className="md:text-left lg:text-left sm:flex sm:justify-center sm:text-center">
                                <div>
                                    <div className='ml-2 sm:mt-10 md:mt-0 lg:mt-0'>
                                        <label className='text-2xl font-semibold'>ADDRESS</label>
                                        <p className='w-52 text-lg mt-5 text-gray-500'>17 Osemeka Street Orile Iganmu, Lagos State Nigeria</p>
                                    </div>
                                    <div className='mt-5'>
                                        <div>
                                            <div className="flex m-2">
                                                <img className="w-6" src={call} alt="Call"></img>
                                                <p className="ml-1 text-gray-500">+234 7052456491</p>
                                            </div>
                                            <div className="flex m-2">
                                                <img className="w-6" src={call} alt="Call"></img>
                                                <p className="ml-1 text-gray-500">+234 9054498013</p>
                                            </div>
                                            <div className="flex m-2">
                                                <img className="w-6" src={mail} alt="Mail"></img>
                                                <p className="ml-1 text-gray-500">ebubejohnenyi@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className="text-xl md:ml-2 lg:ml-2 font-semibold">FOLLOW ME</p>
                                        <div className="flex m-1 sm:ml-8 md:ml-0 lg:ml-0">
                                            <img className='bg-white rounded-full w-5 m-3 cursor-pointer' src={facebook} alt='FaceBook'></img>
                                            <img className='bg-white rounded-full w-5 m-3 cursor-pointer' src={twitter} alt='Twitter'></img>
                                            <img className='bg-white rounded-full w-5 m-3 cursor-pointer' src={linkedin} alt='LinkedIn'></img>
                                            <img className='bg-white rounded-full w-5 m-3 cursor-pointer' src={github} alt='Github'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:ml-10 lg:ml-10 col-span-4">
                            <div className="mb-5 sm:mt-5 sm:text-center md:text-left">
                                <label className="font-semibold text-lg sm:text-xl">SEND ME A NOTE</label>
                            </div>
                            <form className="m-3" action="https://formspree.io/f/xkndpdjn" method="POST">
                                <input className='md:w-45 lg:w-45 sm:w-full border p-3 outline-none rounded-lg' name='Name' placeholder="Name" type='text' id='name' required></input>
                                <input className='md:w-45 lg:w-45 sm:w-full sm:mt-5 md:ml-12 lg:md-12 border p-3 outline-none rounded-lg' name='Email' placeholder="Email" type='mail' id='mail' required></input>
                                <div className='w-full h-44 border mt-8'>
                                    <textarea className='w-full p-2 h-full resize-none outline-none rounded-lg' placeholder='Tell me more about your needs....' id='message' name='Message' required></textarea>
                                </div>
                                <div className="flex justify-center">
                                    <button className="w-52 mt-10 font-semibold p-4 rounded-full text-white bg-green-500/70 shadow-lg send_message" type='submit'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </section>
        </>
    )
}