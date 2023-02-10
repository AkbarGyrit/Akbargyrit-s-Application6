import React from "react";

import { Text, Img } from "components";
import { useNavigate } from "react-router-dom";

const WebpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A701 flex flex-col font-inter md:gap-[40px] sm:gap-[40px] gap-[75px] justify-start mx-[auto] p-[25px] sm:px-[20px] w-[100%]">
        <div className="bg-light_green_A700_47 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mr-[499px] mt-[10px] p-[5px] md:px-[20px] sm:px-[20px] rounded-radius20 md:w-[100%] sm:w-[100%] w-[60%]">
          <Text
            className="mb-[13px] md:ml-[0] sm:ml-[0] ml-[20px] text-black_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Home
          </Text>
          <Text
            className="mb-[14px] md:ml-[0] sm:ml-[0] ml-[37px] text-black_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Services
          </Text>
          <Text
            className="mb-[14px] md:ml-[0] sm:ml-[0] ml-[26px] text-black_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Products
          </Text>
          <a
            href={"https://gyroitsolutions.com/"}
            target="_blank"
            className="common-pointer font-bold mb-[14px] md:ml-[0] sm:ml-[0] ml-[50px] sm:text-[31px] md:text-[33px] text-[35px] text-black_900 text-left underline w-[auto]"
            onClick={() => navigate("/")}
            rel="noreferrer"
          >
            About us
          </a>
        </div>
        <div className="bg-bluegray_100 flex flex-col items-center justify-end mb-[42px] md:ml-[0] sm:ml-[0] ml-[68px] mr-[149px] p-[15px] md:px-[20px] sm:px-[20px] rounded-radius35 md:w-[100%] sm:w-[100%] w-[83%]">
          <Img
            src="images/img_homescreen1.png"
            className="h-[557px] md:h-[auto] sm:h-[auto] object-cover w-[94%]"
            alt="HomescreenOne"
          />
        </div>
      </div>
    </>
  );
};

export default WebpagePage;
