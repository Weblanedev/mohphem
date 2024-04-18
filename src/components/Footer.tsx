import instaIcon from '../assets/Icons/instagram.png'
import fbIcon from '../assets/Icons/fbIcon.png'
import { Link } from 'react-router-dom';


const socialStyles = "h-5 "
const privacyStyle = "font-poppins text-[12px] leading-[20px]  font-semibold ";

export const Footer = () => {
  return (
    <div className="min-h-[249px] px-8 py-12 sm:px-40 sm:pt-20 sm:pb-8 bg-gray-700">
      <div className="min-h-[137px] flex flex-col gap-8 sm:gap-12 text-gray-300 ">
        {/* Top */}
        <div className="min-h-[32px] flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-0 ">
          {/* brand name */}
          <div className=" sm:w-1/3 flex flex-col sm:flex-row gap-5 items-center">
            <div className="text-[24px] font-medium font-poppins">
              BroadStack<span className="text-gray-400">.</span>
            </div>
            <hr className='w-5 sm:hidden opacity-40' />
            <span className='hidden sm:block opacity-40'>|</span>
            {/* <span className=" text-capR1 font-light opacity-80">Gifts & Decoration Store</span> */}
          </div>

          {/* navigation */}
          {/* <div className="flex flex-col items-center sm:flex-row gap-8 sm:gap-10 text-capR1 font-light opacity-80">
            <span>Home</span>
            <span>Shop</span>
            <span>Product</span>
            <span>Blog</span>
            <span>Contact Us</span>
          </div> */}
        </div>

        {/* copyright */}
        <div className="min-h-[56px] flex flex-col-reverse sm:flex-row justify-between items-center gap-8 sm:gap-0 py-6 sm:py-0 border-solid border-t-[1px] border-gray-400">
          <div className="flex flex-col-reverse items-center sm:flex-row gap-7">
            <span className="text-[12px] leading-5 text-gray-300 font-poppins opacity-80">
              Copyright ©. All rights reserved
            </span>

            <div className='flex gap-7'>
              <Link to="/privacy">
                <span className={privacyStyle}>Privacy Policy</span></Link>
              <Link to="/contact">
                <span className={privacyStyle}>Terms of Use</span>
              </Link>
            </div>

          </div>

          {/* social icons */}
          <div className='flex items-center gap-6'>
            <Link to="https://www.instagram.com/">
              <img src={instaIcon} alt="icon" className={socialStyles} />

            </Link>
            <Link to="https://www.facebook.com">

              <img src={fbIcon} alt="icon" />
            </Link>
        </div>
        </div>
      </div>
    </div>
  );
};
