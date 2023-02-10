import React from "react";

import { Img, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const SignupPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <div className="bg-white_A700_93 flex flex-col font-inder items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row gap-[36px] items-start justify-between w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 flex-col gap-[48px] justify-start md:mt-[0] sm:mt-[0] mt-[4px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <Img
              src="images/img_logo1.png"
              className="h-[139px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[66%]"
              alt="LogoOne"
            />
            <div className="bg-bluegray_100 flex flex-col items-center justify-end md:ml-[0] sm:ml-[0] ml-[16px] p-[10px] rounded-radius43 md:w-[100%] sm:w-[100%] w-[98%]">
              <Text
                className="mt-[17px] not-italic text-black_900 text-left"
                as="h3"
                variant="h3"
              >
                <a
                  href="javascript:"
                  className="sm:text-[20px] md:text-[22px] text-black_900 text-[24px] font-inder font-normal underline"
                >
                  About us
                  <br />
                </a>
                <span className="sm:text-[20px] md:text-[22px] text-black_900 text-[24px] font-inter font-bold">
                  <br />
                </span>
                <span className="sm:text-[20px] md:text-[22px] text-black_900 text-[24px] font-inder font-normal">
                  We are a cloud based IT consulting services co. We are focused
                  around <br />
                  AWS and SF platforms. Each of our interaction is based on ROI
                  business cases. We provide bespoke development, migration and
                  testing services in the cloud platform we operate
                </span>
              </Text>
            </div>
          </div>
          <div className="font-inter md:h-[822px] sm:h-[822px] h-[848px] md:px-[20px] sm:px-[20px] relative md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="absolute bg-bluegray_100 h-[818px] inset-[0] justify-center m-[auto] rounded-radius57 w-[92%]"></div>
            <div className="absolute bg-gray_400 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] p-[72px] sm:px-[20px] md:px-[40px] rounded-radius57 w-[100%]">
              <div className="flex flex-col justify-start mb-[165px] mt-[5px] md:w-[100%] sm:w-[100%] w-[74%]">
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[16px] not-italic text-black_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Contact Us
                </Text>
                <div
                  className="common-pointer flex flex-row items-start justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[56%]"
                  onClick={googleSignIn}
                >
                  <Img
                    src="images/img_google1.png"
                    className="h-[60px] md:h-[auto] sm:h-[auto] object-cover w-[16%]"
                    alt="GoogleOne"
                  />
                  <Text
                    className="mt-[9px] not-italic text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Sign up with Google
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[110px] mt-[8px] not-italic text-black_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  -OR-
                </Text>
                <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[41px] mt-[70px] md:w-[100%] sm:w-[100%] w-[92%]">
                  <Text
                    className="md:ml-[0] sm:ml-[0] ml-[2px] not-italic text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Full Name
                  </Text>
                  <Line className="bg-gray_50 h-[1px] md:ml-[0] sm:ml-[0] ml-[5px] mt-[4px] w-[99%]" />
                  <Text
                    className="md:ml-[0] sm:ml-[0] ml-[2px] mt-[40px] not-italic text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Email Address
                  </Text>
                  <Line className="bg-gray_50 h-[1px] md:ml-[0] sm:ml-[0] ml-[4px] mt-[8px] w-[100%]" />
                  <div className="flex flex-row items-start justify-between md:ml-[0] sm:ml-[0] ml-[2px] mt-[34px] w-[100%]">
                    <Text
                      className="mt-[13px] not-italic text-black_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Password
                    </Text>
                    <Img
                      src="images/img_blindicon1.png"
                      className="h-[29px] md:h-[auto] sm:h-[auto] mb-[10px] object-cover w-[auto]"
                      alt="blindiconOne"
                    />
                  </div>
                  <Line className="bg-white_A700 h-[1px] mt-[8px] w-[100%]" />
                  <Button
                    className="common-pointer cursor-pointer font-normal leading-[normal] min-w-[447px] mt-[34px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]"
                    onClick={() => navigate("/webpage")}
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
