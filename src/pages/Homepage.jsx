import landingImage from '../assets/HeaderImage.jpg';
import {TypeAnimation} from 'react-type-animation';
import profile from '../assets/profile.jpg';
import ChefGibbs from '../assets/ChefGibbs.png';
import RetnaaDayok from '../assets/RetnaaDayok.png';
import adeyemi from '../assets/adeyemi.png';
import timi from '../assets/timi.png';
import tom from '../assets/tom.jpeg';
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
import resumeLink from '../assets/Resume.pdf';
import { useState} from 'react';
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
      
      const downloadResume = (url) => {
        const fileName = url.split("/").pop();
        const resume = document.createElement("a");
        resume.href = url;
        resume.setAttribute('download', fileName);
        document.body.appendChild(resume);
        resume.click();
        resume.remove();
      }

      const experienceValue = 2;
      const happyClient = 20;
      const projectDone = 10;
      const award = 2;
      let intervals = 500;

      function startingCounting(){
          let valueDisplays = document.querySelectorAll('.num');
          valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(intervals / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if(startValue === endValue){
                    clearInterval(counter);
                }
            }, duration);
          });
      }
      window.addEventListener('load', startingCounting);

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
                    <div className="flex lg:m-2 lg:absolute sm:left-32 sm:bottom-4 md:left-0 lg:left-0 sm:mt-2 lg:ml-12 bottom-0 justify-center">
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
                <div className="flex justify-center items-center h-screen bg-fixed bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${landingImage})`}}>
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
                            <h2 className='sm:text-6xl md:text-9xl lg:text-9xl font-sans font-bold text-gray-300/45'>ABOUT ME</h2>
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
                                <p className="mt-3 font-sans">Industrious, highly skilled and forward-looking Software Engineer with background in creating and executing innovative software solutions to enhance productivity, with 3years of Web Development. Committed to delivering innovative, robust and efficient solutions that drive company success.</p>
                                <p className="mt-3 font-sans"> Proficient in UI/UX design, frontend and backend development, mobile app development, and data analysis, with a proven track record of exceeding client expectations and delivering exceptional results</p>
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
                                    <button className="m-2 bg-green-500/85 shadow-xl text-white font-sans p-4 w-48 rounded-full hover:bg-green-400/85 transition-all" onClick={() => {downloadResume(resumeLink)}}>Download CV</button>
                                </div>
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-2 justify-items-center md:grid-cols-4 lg:grid-cols-4 m-10'>
                            <div className="text-center border-r sm:border-b md:border-b-0 lg:border-b-0 pb-5 border-gray-300 sm:w-40 md:w-56 lg:w-56">
                                <h1 className='num text-6xl font-mono text-gray-400' data-val={experienceValue}>2</h1>
                                <p className="aboutMe_text">Year Experience</p>
                            </div>
                            <div className="text-center sm:border-b md:border-b-0 lg:border-b-0 md:border-r pb-5 border-gray-300 sm:w-40 md:w-56 lg:w-56">
                                <h1 className='num text-6xl font-mono text-gray-400' data-val={happyClient}>20</h1>
                                <p className="aboutMe_text">Happy Clients</p>
                            </div>
                            <div className="text-center border-r pb-3 border-gray-300 sm:w-40 md:w-56 lg:w-56">
                                <h1 className='num text-6xl font-mono text-gray-400' data-val={projectDone}>10+</h1>
                                <p className="aboutMe_text">Project Done</p>
                            </div>
                            <div className="text-center pb-3 border-gray-300 sm:w-40 md:w-56 lg:w-56">
                                <h1 className='num text-6xl font-mono text-gray-400' data-val={award}>2</h1>
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
                                <img className='sm:w-24 md:w-24 lg:w-24' src={ui_ux} alt="UI/UX"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">UI/UX</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">My proficiency in UI/UX design allows me to create captivating and intuitive user interfaces that enhance the overall user experience.</p>
                            </div>
                        </div>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-24 md:w-24 lg:w-24' src={frontend} alt="Frontend Developer"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">Frontend Developer</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">As a frontend developer, I leverage my expertise in HTML, CSS, and JavaScript frameworks such as React.js to bring designs to life.</p>
                            </div>
                        </div>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-32 md:w-28 lg:w-28' src={backend} alt="Backend Developer"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">Backend Developer</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">In backend development, I specialize in building robust and scalable server-side applications using languages like Java, Python, or Node js, along with frameworks such as Springboot, Flask, or Express js.</p>
                            </div>
                        </div>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-24 md:w-24 lg:w-24' src={mobiledev} alt="Mobile App Developer"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">Mobile App Developer</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">In the realm of mobile app development, I excel in creating native or cross-platform applications for iOS and Android using frameworks like React Native.</p>
                            </div>
                        </div>
                        <div className='flex m-4'>
                            <div className='bg-white w-fit h-fit p-3 rounded-lg shadow-xl'>
                                <img className='sm:w-24 md:w-24 lg:w-24' src={dataAnalysis} alt="Data Analysis"></img>
                            </div>
                            <div className="ml-2">
                                <h2 className="text-2xl font-semibold font-sans">Data Analysis</h2>
                                <p className="md:w-3/4 lg:w-3/4 mt-2 text-lg">With a strong analytical mindset and proficiency in tools like Pandas, SQL, I specialize in manipulating and giving insights from complex datasets. </p>
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
                                    <p className="text-lg mt-4">A year intensed course as Software Engineering in Semicolon.Africa and Knowledge gained are:<span className='font-semibold'> Design Thinking, Critical Thinking.</span> <br/><span className="font-semibold"> Backend Languages - </span>Java, Node js, Python. <br/><span className="font-semibold">Frontend Languages - </span>HTML & CSS, Javascipt,Tailwind CSS.  <br/> <span className="font-semibold">Frameworks - </span>React js, Spring Boot, Flask, FlaskApi, Django, Next js.  </p>
                                </div>
                            </div>
                            <div>
                                <div className="border border-gray-300 p-3 rounded-lg mt-5">
                                    <p className="bg-green-400/95 w-fit pl-3 pr-3 rounded text-white font-thin">2019 - 2022</p>
                                    <p className="text-xl font-semibold mt-2">Business Administration and Management</p>
                                    <p className="text-red-500 text-lg mt-2">Institution of Management and Technology</p>
                                    <p className="text-lg mt-4">Graduated as a National Diploma in Business Administration and Management with  a <span className="font-semibold">CGPA : 2.95</span> upper class</p>
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
                                    <p className="text-lg mt-4">As a Full Stack Developer working with Cyber Buddies i was repsonsible for the robust software functionality, Proficient in technologies like HTML, CSS, Javascripts and the server side like Python.</p>
                                </div>
                            </div>
                            <div>
                                <div className="border border-gray-300 p-3 rounded-lg mt-5">
                                    <p className="bg-green-400/95 w-fit pl-3 pr-3 rounded text-white font-thin">Oct 2023 - Jan 2024</p>
                                    <p className="text-xl font-semibold mt-2">Software Engineering - Capstone Project</p>
                                    <p className="text-red-500 text-lg mt-2">Semicolon Africa</p>
                                    <p className="text-lg mt-4">Create BLUMA, an online community platform solely for promoting Cultural Heritage in Nigeria and in Africa at Large. Creating awareness for people in diaspora of their cultural value and history. Developed with Java( Spring Boot), Java Script, React js, HTML, Tailwind Css.</p>
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
                                        <p className='bg-green-400 h-2 rounded-full mr-10'></p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">HTML & CSS</p>
                                        <p className="text-lg font-semithin text-gray-300">95%</p>
                                    </div>
                                    <div className="bg-gray-200 rounded-full">
                                        <p className='bg-green-400 h-2 rounded-full mr-5'></p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">Java Script</p>
                                        <p className="text-lg font-semithin text-gray-300">80%</p>
                                    </div>
                                    <div className="bg-gray-200 rounded-full">
                                        <p className='bg-green-400 h-2 rounded-full mr-10'></p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">Tailwind CSS</p>
                                        <p className="text-lg font-semithin text-gray-300">90%</p>
                                    </div>
                                    <div className="bg-gray-200 rounded-full">
                                        <p className='bg-green-400 h-2 rounded-full mr-10'></p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="md:ml-5 lg:ml-5 sm:mt-3 md:mt-0 lg:mt-0">
                                    <div>
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">Node js</p>
                                            <p className="text-lg font-semithin text-gray-300">90%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-5'></p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">Java</p>
                                            <p className="text-lg font-semithin text-gray-300">80%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-10'></p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">React Native</p>
                                            <p className="text-lg font-semithin text-gray-300">80%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-10'></p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">Data Analysis</p>
                                            <p className="text-lg font-semithin text-gray-300">64%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-20'></p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex justify-between">
                                            <p className="text-lg font-semibold">MySQL</p>
                                            <p className="text-lg font-semithin text-gray-300">64%</p>
                                        </div>
                                        <div className="bg-gray-200 rounded-full">
                                            <p className='bg-green-400 h-2 rounded-full mr-20'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="border-2 border-gray-200 hover:bg-slate-500 hover:text-white transition-all p-3 w-48 rounded-full flex justify-center cursor-pointer mt-12">
                            <button className='mr-3 text-gray-400 hover:bg-slate-500 hover:text-white transition-all' onClick={() => {downloadResume(resumeLink)}}>Download CV</button>
                            <img className='w-4 h-4 mt-1' src={download} alt="Download CV"></img>
                        </div>
                    </div>
                </section>
                <section className="mywork md:pb-10 md:ml-56 lg:ml-56 mt-20 bg-gray-100/45 pt-12 pb-12">
                    <div className='flex justify-center'>
                        <div className="relative">
                            <h2 className='sm:text-6xl md:text-9xl lg:text-9xl font-sans font-bold text-gray-300/45'>PORTFOLIO</h2>
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
                                        <img src={ChefGibbs} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Gbolabo Gibbs Adebakin</p>
                                        <p className='text-gray-500/85'>Vice President - Culinary Arts Practitioners Association Of Nigeria</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg w-fit">"Before John embarked on his Software Engineer career, he has always been a goal getter attentive to details and his known for his problem solving skills. He brought his expectional skills to the Hospitality field and made name for him self."</p>
                                </div>
                                <div className="flex mt-5">
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                    <img className="w-4 m-1" src={stars} alt="Stars"></img>
                                </div>
                            </div>
                            <div className="md:m-4 lg:m-4 bg-gray-100/65 p-5 sm:w-full  md:w-45 lg:w-45 rounded-xl flex-none">
                                <div className="flex">
                                    <div className="w-20 h-20 overflow-hidden rounded-full">
                                        <img src={RetnaaDayok} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Retnaa Dayok Maxwell</p>
                                        <p className='text-gray-500/85'>Software Engineer at Semicolon Africa</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg w-fit">"John is a talented full-stack developer who consistently delivers high-quality work. He have a deep understanding of modern web technologies and are adept at turning complex requirements into elegant solutions. His commitment to meeting deadlines and his  collaborative approach make him a valuable asset to any development team"</p>
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
                                        <img src={adeyemi} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Adetoyinbo Adeyemi</p>
                                        <p className='text-gray-500/85'>Creative Software Engineer, Creative Director at Plecini</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg w-fit">"I had the pleasure of collaborating with John on a challenging web development project, and I couldn't be happier with the results. His ability to juggle multiple tasks while maintaining a high level of attention to detail was impressive. He is not only skilled technically but also great communicators, always keeping stakeholders informed and involved throughout the process"</p>
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
                                        <img src={timi} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Bamgbose Babatunde Timileyin</p>
                                        <p className='text-gray-500/85'>Snr. Software Engineer</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg w-fit">"I highly recommend John for any web development project. His expertise in full-stack development, combined with his professionalism and work ethic, make him a valuable partner. He consistently delivered results that exceeded my expectations, and his proactive approach to problem-solving helped us overcome obstacles and achieve our project goals. It was a pleasure working with Ebube John Enyi, and I would not hesitate to engage his services again."</p>
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
                                        <img src={tom} alt="First Slide"></img>
                                    </div>
                                    <div className="m-3">
                                        <p className="font-semibold">Tom Benjamin</p>
                                        <p className='text-gray-500/85'>Jnr. Frontend Developer</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg w-fit">"Working with Ebube John Enyi was a seamless experience from start to finish. He demonstrated a strong grasp of both front-end and back-end development concepts and were able to quickly adapt to changing requirements. He dedication to writing clean, maintainable code and his willingness to go the extra mile to ensure client satisfaction set him apart. I look forward to collaborating with john again in the future."</p>
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