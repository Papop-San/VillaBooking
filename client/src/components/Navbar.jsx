import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='font-sans'>
      <div className='flex justify-center items-center mt-3 border-b-2 border-[#1f1f1f1] hidden md:flex '>
        {/* The entire content of your Navbar goes here */}
        <div className='md:flex md:text-xs '>
          <EmailIcon className='text-[#f35525] md:text-[10px] md:ml-[3rem]' />
          <a href="mailto:info@company.com" className='md:ml-2 md:text-[15px]'>
            info@company.com
          </a>
        </div>

        <div className='md:flex md:text-xs md:w-[300px] ml-[10px]'>
          <MapIcon className='text-[#f35525] md:text-[10px]' />
          <a href="#" className='md:ml-2 md:text-[12px]'>
            Sunny Isles Beach, FL 33160
          </a>
        </div>
        <div className='lg:ml-[18rem] mb-[10px] md:ml-[10px] '>
          <FacebookIcon
            className='border border-[#cdcdcd] rounded-full bg-[#cdcdcd] text-[#f35525] cursor-pointer p-2 transition duration-1000 hover:bg-[#f35525] hover:text-white mx-[10px] md:mx[5px]'
            style={{ fontSize: "30px", padding: "5px", color: "#fff" }}
          />
          <TwitterIcon
            className='border border-[#cdcdcd] rounded-full bg-[#cdcdcd] text-[#f35525] cursor-pointer p-2 transition duration-1000 hover:bg-[#f35525] hover:text-white mx-[10px] md:mx[5px]'
            style={{ fontSize: "30px", padding: "5px", color: "#fff" }}
          />
          <InstagramIcon
            className='border border-[#cdcdcd] rounded-full bg-[#cdcdcd] text-[#f35525] cursor-pointer p-2 transition duration-1000 hover:bg-[#f35525] hover:text-white mx-[10px] md:mx[5px]'
            style={{ fontSize: "30px", padding: "5px", color: "#fff" }}
          />
          <LinkedInIcon
            className='border border-[#cdcdcd] rounded-full bg-[#cdcdcd] text-[#f35525] cursor-pointer p-2 transition duration-1000 hover:bg-[#f35525] hover:text-white mx-[10px] md:mx[5px]'
            style={{ fontSize: "30px", padding: "5px", color: "#fff" }}
          />
        </div>
      </div>

      <div className='flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 sm:justify-between'>
        <div className='border border-orange-700 flex items-center'>
          <h1 className='lg:mr-[7rem] text-[30px] font-bold mr-[5rem] md:ml-[2rem] md:mr-[2rem] px-[2rem]'>
            VILLA
          </h1>

          <div onClick={handleNav} className='block md:hidden '>
            {nav ? <CloseIcon className='md:ml-[2rem]' /> : <MenuIcon className='md:ml-[2rem]' />}
          </div>
        </div>

        <div className='hidden sm:flex ml-[15px]'>
          <ul className='flex items-center md:text-[15px]'>
            <li><Link to="/" className='mx-[2rem] text-[#f35525] font-semibold md:text-[15px]'>Home</Link></li>
            <li><Link to="/proper" className='mx-[2rem] hover:text-[#f35525] text-[16px] font-semibold md:text-[14px]'>Properties</Link></li>
            <li><Link to="/detail" className='mx-[2rem] hover:text-[#f35525] text-[16px] font-semibold md:text-[14px]'>PropertyDetail</Link></li>
            <li><Link to="/contact" className='mx-[2rem] hover:text-[#f35525] text-[16px] font-semibold md:text-[14px]'>ContactUs</Link></li>
            <li className='bg-[#1e1e1e] text-[#fff] p-2 rounded-full md:mr-[1rem] md:text-[12px] flex items-center'>
              <CalendarMonthIcon className='border-[#f35525] bg-[#f35525] mr-4 rounded-full md:text-[12px]'
                style={{ fontSize: "36px", padding: "5px", color: "#fff" }}
              />
              <a className='cursor-pointer hover:text-[#f35525] md:text-[10px]'>Schedule a visit</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
