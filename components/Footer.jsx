import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col lg:flex-row h-auto lg:h-[583px] bg-[#263341] p-10 lg:pt-20">
      <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0">
        <span className="text-[24px] font-[700]">Book a Demo</span>
        <p className="text-[20px] font-[400] font-[Open Sans] pb-4 pt-4">
          We would love to give you a quick demo of how Aurae.ai can help your
          health better. Reach out to us by filling the form below
        </p>
        <form action="">
          <div className="flex flex-col ">
            <div className="flex flex-col md:flex-row justify-between gap-[40px]">
              <input
                placeholder="First Name"
                className="h-[64px] text-black outline-none p-3 text-[16px] font-[250] w-full md:w-1/2 rounded-[8px] mb-4 md:mb-0"
                type="text"
              />
              <input
                placeholder="Email Address"
                className="h-[64px] text-black outline-none p-3 text-[16px] font-[250] w-full md:w-1/2 rounded-[8px]"
                type="text"
              />
            </div>

            <input
              placeholder="Leave a message"
              className="mt-[30px] text-black outline-none p-3 text-[16px] font-[250] h-[116px] rounded-[8px] "
              type="text"
            />
          </div>
        </form>
        <button className="text-[#263341] font-[500] text-[22px] bg-white w-full h-[53px] rounded-[28px] mt-[30px]">
          Book a demo
        </button>
      </div>
      <div className="w-full lg:w-1/4 flex flex-col gap-8 pl-0 lg:pl-[65px] text-white mb-10 lg:mb-0">
        <span className="font-[400] text-[24px]">Quick Links</span>
        <Link href="/solutions">
          <p className="font-[400] text-[16px]">Solutions</p>
        </Link>
        <Link href="/blogs">
          <p className="font-[400] text-[16px]">Blogs</p>
        </Link>
        <Link href="/contactUs">
          <p className="font-[400] text-[16px]">Contact Us</p>
        </Link>
      </div>
      <div className="w-full lg:w-1/4 text-white">
        <div className="icons pt-3 flex cursor-pointer gap-6 text-white text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>
        <div className="address text-[16px] mt-8 text-white font-[400]">
          Awfis Andheri, Mumbai, India <br />
          +91 62 345 67 89 <br />
          companyname@mail.com
        </div>
        <div className="flex gap-2 mt-5">
          <svg
            width="44"
            height="49"
            viewBox="0  0 44 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.26682 22.1128C4.02883 17.3869 3.07971 6.94896 9.18711 3.00391"
              stroke="#DC7D57"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M6.08594 27.0457C6.98004 25.8814 8.68571 22.6897 8.35558 19.2378"
              stroke="#DC7D57"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M7.94922 16.1549C8.2931 8.21001 14.7582 -5.61224 33.5343 4.64851"
              stroke="#DC7D57"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M1.75781 39.7811L6.91609 33.4115M8.36041 30.5349C9.52962 28.8911 11.9506 24.6995 12.2807 21.0832C12.6108 17.4669 12.4183 13.9602 12.2807 12.6589M13.106 9.37132C15.9947 2.79624 28.1682 2.38515 32.9138 9.3712C37.6594 16.3572 35.3898 21.9049 34.9771 22.1104M34.3581 24.7817C33.7392 28.0692 31.7171 35.9593 28.5809 41.2194M36.2151 7.72755C38.416 11.837 41.4972 22.4393 36.2151 31.9732M41.7861 23.9598L42.8177 28.2747C43.0241 28.8226 43.2304 30.1239 42.4051 30.9458C41.5797 31.7677 40.7544 32.1787 40.1354 32.5896C39.5164 33.0005 37.2055 37.8908 37.0405 40.1921M34.9771 35.8772L32.7075 40.603M4.64645 41.6304C7.94775 37.8634 14.5916 29.4664 14.7567 26.0145M15.3757 22.727L15.582 13.4808C15.7196 11.6315 17.1089 8.01521 21.5656 8.34397C24.1791 8.41246 29.6125 9.65899 30.4379 14.0972M31.4695 16.7683C31.332 21.0147 30.3141 30.4527 27.3429 34.2334M26.1049 36.9045L23.2163 42.0413M14.7567 48C18.4019 42.7262 25.5684 31.8499 25.0732 30.5349M26.3112 27.6583C27.0678 24.4392 28.1682 17.5902 27.1366 14.7136C26.1049 11.837 21.1529 11.837 19.5023 14.0972C17.8516 16.3574 19.296 18.0011 19.296 18.0011M23.2163 15.33V22.727C23.2163 23.4119 23.2163 24.3707 22.8036 25.6036C22.3909 26.8364 20.4652 31.0828 19.5023 33.4115M11.6617 45.7398L18.2643 36.4936M7.94775 43.8905L10.4237 41.2194M12.2807 38.7538C14.8872 34.7813 20.0631 25.5625 19.915 20.4668"
              stroke="#DC7D57"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          <div className="pt-3">
            <svg
              width="106"
              height="18"
              viewBox="0 0 106 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2858 14.024H5.99779L4.98979 17H0.693788L6.78979 0.151999H11.5418L17.6378 17H13.2938L12.2858 14.024ZM11.2298 10.856L9.14179 4.688L7.07779 10.856H11.2298ZM32.7171 3.608V17H28.6131V15.176C28.1971 15.768 27.6291 16.248 26.9091 16.616C26.2051 16.968 25.4211 17.144 24.5571 17.144C23.5331 17.144 22.6291 16.92 21.8451 16.472C21.0611 16.008 20.4531 15.344 20.0211 14.48C19.5891 13.616 19.3731 12.6 19.3731 11.432V3.608H23.4531V10.88C23.4531 11.776 23.6851 12.472 24.1491 12.968C24.6131 13.464 25.2371 13.712 26.0211 13.712C26.8211 13.712 27.4531 13.464 27.9171 12.968C28.3811 12.472 28.6131 11.776 28.6131 10.88V3.608H32.7171ZM39.769 5.84C40.249 5.104 40.849 4.528 41.569 4.112C42.289 3.68 43.089 3.464 43.969 3.464V7.808H42.841C41.817 7.808 41.049 8.032 40.537 8.48C40.025 8.912 39.769 9.68 39.769 10.784V17H35.665V3.608H39.769V5.84ZM45.1146 10.28C45.1146 8.904 45.3706 7.696 45.8826 6.656C46.4106 5.616 47.1226 4.816 48.0186 4.256C48.9146 3.696 49.9146 3.416 51.0186 3.416C51.9626 3.416 52.7866 3.608 53.4906 3.992C54.2106 4.376 54.7626 4.88 55.1466 5.504V3.608H59.2506V17H55.1466V15.104C54.7466 15.728 54.1866 16.232 53.4666 16.616C52.7626 17 51.9386 17.192 50.9946 17.192C49.9066 17.192 48.9146 16.912 48.0186 16.352C47.1226 15.776 46.4106 14.968 45.8826 13.928C45.3706 12.872 45.1146 11.656 45.1146 10.28ZM55.1466 10.304C55.1466 9.28 54.8586 8.472 54.2826 7.88C53.7226 7.288 53.0346 6.992 52.2186 6.992C51.4026 6.992 50.7066 7.288 50.1306 7.88C49.5706 8.456 49.2906 9.256 49.2906 10.28C49.2906 11.304 49.5706 12.12 50.1306 12.728C50.7066 13.32 51.4026 13.616 52.2186 13.616C53.0346 13.616 53.7226 13.32 54.2826 12.728C54.8586 12.136 55.1466 11.328 55.1466 10.304ZM74.8437 10.088C74.8437 10.472 74.8197 10.872 74.7717 11.288H65.4837C65.5477 12.12 65.8117 12.76 66.2757 13.208C66.7557 13.64 67.3397 13.856 68.0277 13.856C69.0517 13.856 69.7637 13.424 70.1637 12.56H74.5317C74.3077 13.44 73.8997 14.232 73.3077 14.936C72.7317 15.64 72.0037 16.192 71.1237 16.592C70.2437 16.992 69.2597 17.192 68.1717 17.192C66.8597 17.192 65.6917 16.912 64.6677 16.352C63.6437 15.792 62.8437 14.992 62.2677 13.952C61.6917 12.912 61.4037 11.696 61.4037 10.304C61.4037 8.912 61.6837 7.696 62.2437 6.656C62.8197 5.616 63.6197 4.816 64.6437 4.256C65.6677 3.696 66.8437 3.416 68.1717 3.416C69.4677 3.416 70.6197 3.688 71.6277 4.232C72.6357 4.776 73.4197 5.552 73.9797 6.56C74.5557 7.568 74.8437 8.744 74.8437 10.088ZM70.6437 9.008C70.6437 8.304 70.4037 7.744 69.9237 7.328C69.4437 6.912 68.8437 6.704 68.1237 6.704C67.4357 6.704 66.8517 6.904 66.3717 7.304C65.9077 7.704 65.6197 8.272 65.5077 9.008H70.6437ZM78.9287 17.192C78.2087 17.192 77.6167 16.984 77.1527 16.568C76.7047 16.136 76.4807 15.608 76.4807 14.984C76.4807 14.344 76.7047 13.808 77.1527 13.376C77.6167 12.944 78.2087 12.728 78.9287 12.728C79.6327 12.728 80.2087 12.944 80.6567 13.376C81.1207 13.808 81.3527 14.344 81.3527 14.984C81.3527 15.608 81.1207 16.136 80.6567 16.568C80.2087 16.984 79.6327 17.192 78.9287 17.192ZM94.2702 14.024H87.9822L86.9742 17H82.6782L88.7742 0.151999H93.5262L99.6222 17H95.2782L94.2702 14.024ZM93.2142 10.856L91.1262 4.688L89.0622 10.856H93.2142ZM105.581 0.151999V17H101.477V0.151999H105.581Z"
                fill="#DC7D57"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
