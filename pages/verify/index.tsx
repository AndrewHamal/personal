import Head from "next/head";
import { Eye, EyeOff, Lock, Mail } from "react-feather";
import { useEffect, useState } from "react";
import { register, resendOtp, verifyOtp } from "../api/auth";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import Particle from "../components/particle";
import { getCookie } from "cookies-next";
import { LoadingOutlined } from "@ant-design/icons";
import SiderHeader from "../components/sider/siderheader";
import { useNavigate } from "react-router-dom";
import SiderFooter from "../components/sider/siderBody";

export default function Verify() {
  //   const router = useRouter();
  const navigate = useNavigate();
  const [otp, setOpt] = useState();
  const [errors, setErrors] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);

  const handleChange = (otp: any) => setOpt(otp);

  function handleSubmit(e: any) {
    let selected_plan = getCookie("selected_plan");
    e.preventDefault();
    setLoading(true);

    verifyOtp(otp)
      .then(({ data }: any) => {
        setLoading(false);
        toast.success(data.message);

        if (selected_plan != "1") return navigate(`/plan/${selected_plan}`);

        navigate("/success");
      })
      .catch(({ response }: any) => {
        setErrors(response?.data);
        setLoading(false);
      });
  }

  function resendOtpHandler() {
    setSendingOtp(true);
    resendOtp()
      .then(({ data }: any) => {
        toast.success(data.message);
        setSendingOtp(false);
      })
      .catch((err) => setSendingOtp(false));
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center p-[100px]">
        <form onSubmit={handleSubmit} className="h-100 w-100">
          <div className="form h-100 relative">
            <div className="otp my-[20px]">
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                separator={<span></span>}
              />
              <div className="text-[12px] text-danger pt-1">
                {errors?.password?.join("\n")}
              </div>
            </div>

            <div className="text-[12px] text-danger pt-1 px-2">
              {errors?.message}
            </div>

            <SiderFooter>
              <>
              <button
                disabled={loading}
                type="submit"
                className="btn-primary w-100"
              >
                {loading ? (
                  <>
                    <LoadingOutlined className="my-auto icon mr-2" /> Loading...
                  </>
                ) : (
                  "Next"
                )}
              </button>

              <p className="text-[12px] pt-3 mb-0">
                <span className="text-[#030128]/[.6]">
                  {" "}
                  Didn’t recieve an email OTP?{" "}
                </span>{" "}
                {sendingOtp ? (
                  <span className="text-[#586FF3]">
                    {" "}
                    <LoadingOutlined className="my-auto icon mx-1" /> Sending...
                  </span>
                ) : (
                  <span
                    onClick={resendOtpHandler}
                    className="text-[#586FF3] cursor-pointer"
                  >
                    Resend
                  </span>
                )}
              </p>
              </>
            </SiderFooter>
          </div>
        </form>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }: any) {
  let token = req.cookies.token;

  if (token) {
    const data = await axios.get("/info", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { email_verified_at, active_plan, date_of_birth } = data?.data;

    if (active_plan?.length && email_verified_at && !date_of_birth) {
      return {
        redirect: {
          permanent: false,
          destination: "/success",
        },
      };
    } else if (active_plan?.length && date_of_birth && email_verified_at) {
      {
        return {
          redirect: {
            permanent: false,
            destination: "/profile-complete",
          },
        };
      }
    }
  }

  return {
    props: {},
  };
}
