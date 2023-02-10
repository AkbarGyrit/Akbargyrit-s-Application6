import React from "react";

import { Text } from "components";
import { useNavigate } from "react-router-dom";

const SignupwithgooglePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A701 flex flex-col font-inter items-end justify-start mx-[auto] p-[90px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col justify-start mb-[84px] mt-[69px] md:w-[100%] sm:w-[100%] w-[83%]">
          <div className="flex h-[56px] md:h-[auto] sm:h-[auto] justify-end md:ml-[0] sm:ml-[0] ml-[213px] relative md:w-[100%] sm:w-[100%] w-[46%]">
            <Text
              className="mt-[auto] mx-[auto] text-black_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Google Account{" "}
            </Text>
            <div className="absolute bg-amber_400_a0 h-[56px] inset-[0] justify-center m-[auto] outline outline-[5px] outline-black_900 w-[100%]"></div>
          </div>
          <div className="flex flex-row sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[14px] mt-[66px] md:w-[100%] sm:w-[100%] w-[77%]">
            <Text
              className="font-semibold text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Email id{" "}
            </Text>
            <Text
              className="font-bold text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Password
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[22px] w-[100%]">
            <div className="bg-bluegray_100 border border-black_900 border-solid h-[75px] w-[auto]"></div>
            <div className="bg-bluegray_100 border border-black_900 border-solid h-[75px] w-[auto]"></div>
          </div>
          <div className="flex flex-col gap-[55px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[307px] mt-[98px] md:w-[100%] sm:w-[100%] w-[24%]">
            <Text
              className="bg-red_300 h-[43px] outline outline-[0.5px] outline-red_900 pl-[31px] pr-[28px] sm:px-[20px] text-black_900 text-left w-[197px]"
              as="h1"
              variant="h1"
            >
              Sign-up
            </Text>
            <Text
              className="common-pointer bg-red_300 h-[43px] outline outline-[0.5px] outline-red_900 pl-[17px] sm:pr-[20px] pr-[35px] py-[3px] text-left text-white_A701 w-[197px]"
              as="h1"
              variant="h1"
              onClick={() => navigate("/")}
            >
              Cancle
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupwithgooglePage;
