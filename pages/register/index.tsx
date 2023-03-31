import { Eye, EyeOff, Lock, Mail } from "react-feather";
import { useState } from "react";
import { register } from "../api/auth";
import axios from "axios";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import SiderFooter from "../components/sider/siderBody";

export default function Register({ setShowSider, showSider }: any) {
  const [visible, setVisible] = useState("password");
  const [errors, setErrors] = useState<any>();
  const [loading, setLoading] = useState(false);

  function registerUser(e: any) {
    e.preventDefault();
    setLoading(true);
    let form = new FormData(e.target);

    register(form)
      .then(({ data }: any) => {
        setCookie("token", data.data.token);
        toast.success(data.message);
        setLoading(false);
        setShowSider({...showSider, page: 'verify'})
      })
      .catch(({ response }: any) => {
        setErrors(response?.data?.errors);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="d-flex justify-content-center relative px-[100px]">
        <form onSubmit={registerUser} className="h-100 w-100">
          <div className="">
            <div className="w-100">
              <div className="text-center my-5">
                <h1 className="font-[sf] text-[#242331]">Sign up</h1>
                <p className="text-[#1D1D1F]">It will only take a few minutes to sign up </p>
              </div>
              <div className="pt-3">
                <label htmlFor="" className="text-[13px] font-[500] mb-[3px]">
                  Email
                </label>

                <div className="w-100 d-flex form-gr border-[1px] border-[#6FE830] p-[13px] rounded-[10px]">
                  <div className="my-auto mr-2">
                    <Mail color="#6FE830" size={17} />
                  </div>
                  <input
                    required
                    name="email"
                    className="bg-[transparent] w-100 text-[13px] focus-visible:outline-none"
                    placeholder="Example@gmail.com"
                    type="email"
                  />
                </div>
              </div>

              {errors?.email && (
                <div className="text-[12px] text-danger pt-1">
                  {errors?.email?.join("\n")}
                </div>
              )}

              <div className="mt-3">
                <label
                  htmlFor=""
                  className="text-[13px] text-[#030128] font-[500] mb-[3px]"
                >
                  Password
                </label>

                <div className="w-100 d-flex bg-white border-[1px] border-[#00000033] p-[13px] rounded-[10px]">
                  <div className="my-auto mr-2">
                    <Lock color="#1d1d77e3" size={17} />
                  </div>
                  <input
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&]).{8,}"
                    title="Must contain at least one number and one uppercase and one special character and lowercase letter, and at least 8 or more characters"
                    name="password"
                    className="bg-[transparent] w-100 text-[13px] focus-visible:outline-none"
                    placeholder="Password"
                    type={visible}
                  />

                  {visible === "password" ? (
                    <Eye
                      onClick={() =>
                        visible === "password"
                          ? setVisible("text")
                          : setVisible("password")
                      }
                      color="#00000033"
                      size={19}
                    />
                  ) : (
                    <EyeOff
                      onClick={() =>
                        visible === "password"
                          ? setVisible("text")
                          : setVisible("password")
                      }
                      color="#00000033"
                      size={19}
                    />
                  )}
                </div>
              </div>

              <div className="text-[12px] text-danger pt-1">
                {errors?.password?.join("\n")}
              </div>
            </div>

            {/* <div className="pt-5 pb-3 w-100 btn-div text-center"> */}
            <SiderFooter>
              <>
                <button
                  disabled={loading}
                  type="submit"
                  className="btn-primary mt-5 w-100"
                >
                  {loading ? (
                    <>
                      <LoadingOutlined className="my-auto icon mr-2" />{" "}
                      Loading...
                    </>
                  ) : (
                    "Next"
                  )}
                </button>
              </>
            </SiderFooter>
            {/* </div> */}
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

    if (!email_verified_at) {
      return {
        redirect: {
          permanent: false,
          destination: "/verify",
        },
      };
    }

    if (email_verified_at && !active_plan.length) {
      return {
        redirect: {
          permanent: false,
          destination: "/plans",
        },
      };
    }

    if (active_plan.length && email_verified_at && !date_of_birth) {
      return {
        redirect: {
          permanent: false,
          destination: "/success",
        },
      };
    }

    if (active_plan.length && date_of_birth && email_verified_at) {
      return {
        redirect: {
          permanent: false,
          destination: "/profile-complete",
        },
      };
    }
  }

  return {
    props: {},
  };
}
