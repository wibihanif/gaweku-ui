"use client";

import React, { PropsWithChildren } from "react";
import { useStore } from "../stores";
import { CheckIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeShell: React.FC<PropsWithChildren> = ({ children }) => {
  const { token, email, onLogout } = useStore();

  const { replace } = useRouter();

  const logout = () => {
    replace("/login");

    onLogout();
  };

  return (
    <div>
      <div>
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full hidden md:block lg:block">
          <div className="h-[62px] py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center ml-4 gap-4">
                <CheckIcon
                  color="white"
                  className="bg-[#B43030] rounded-md p-1"
                  size={30}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="71"
                  height="12"
                  viewBox="0 0 71 12"
                  fill="none"
                >
                  <path
                    d="M62.5591 11.071V0.889191H63.792V5.94033H63.9114L68.4852 0.889191H70.096L65.8204 5.48294L70.096 11.071H68.6045L65.0648 6.33805L63.792 7.76987V11.071H62.5591Z"
                    fill="#18181B"
                  />
                  <path
                    d="M52.8992 3.43466C52.8396 2.93087 52.5976 2.53977 52.1734 2.26136C51.7491 1.98295 51.2288 1.84375 50.6123 1.84375C50.1615 1.84375 49.7671 1.91667 49.4291 2.0625C49.0943 2.20833 48.8325 2.40885 48.6436 2.66406C48.4579 2.91927 48.3651 3.20928 48.3651 3.53409C48.3651 3.80587 48.4298 4.03954 48.559 4.23509C48.6916 4.42732 48.8606 4.58807 49.0661 4.71733C49.2716 4.84328 49.4871 4.94768 49.7124 5.03054C49.9378 5.11009 50.145 5.17472 50.3339 5.22443L51.368 5.50284C51.6331 5.57244 51.9281 5.66856 52.2529 5.79119C52.5811 5.91383 52.8943 6.0812 53.1926 6.29332C53.4942 6.50213 53.7427 6.7706 53.9383 7.09872C54.1338 7.42685 54.2316 7.82955 54.2316 8.30682C54.2316 8.85701 54.0874 9.35417 53.7991 9.7983C53.5141 10.2424 53.0964 10.5954 52.5463 10.8572C51.9994 11.1191 51.3348 11.25 50.5526 11.25C49.8235 11.25 49.1921 11.1323 48.6585 10.897C48.1282 10.6617 47.7106 10.3336 47.4056 9.91264C47.104 9.49171 46.9333 9.00284 46.8936 8.44602H48.1663C48.1994 8.83049 48.3287 9.14867 48.5541 9.40057C48.7828 9.64915 49.0711 9.83475 49.4191 9.95739C49.7704 10.0767 50.1483 10.1364 50.5526 10.1364C51.0233 10.1364 51.4459 10.0601 51.8204 9.90767C52.1949 9.75189 52.4916 9.53646 52.7103 9.26136C52.9291 8.98295 53.0384 8.65814 53.0384 8.28693C53.0384 7.94886 52.944 7.67377 52.7551 7.46165C52.5661 7.24953 52.3176 7.07718 52.0093 6.9446C51.7011 6.81203 51.368 6.69602 51.01 6.59659L49.7572 6.23864C48.9617 6.00994 48.332 5.68348 47.868 5.25923C47.404 4.83499 47.172 4.27983 47.172 3.59375C47.172 3.02367 47.3261 2.52652 47.6343 2.10227C47.9459 1.67472 48.3635 1.34328 48.8872 1.10795C49.4141 0.869318 50.0025 0.75 50.6521 0.75C51.3083 0.75 51.8917 0.867661 52.4021 1.10298C52.9125 1.33499 53.3168 1.65317 53.6151 2.05753C53.9168 2.46188 54.0758 2.92093 54.0924 3.43466H52.8992Z"
                    fill="#18181B"
                  />
                  <path
                    d="M31.9879 11.071H30.6953L34.4339 0.889191H35.7067L39.4453 11.071H38.1527L35.1101 2.49999H35.0305L31.9879 11.071ZM32.4652 7.09374H37.6754V8.18749H32.4652V7.09374Z"
                    fill="#18181B"
                  />
                  <path
                    d="M16.9204 1.98294V0.889191H24.5568V1.98294H21.3551V11.071H20.1221V1.98294H16.9204Z"
                    fill="#18181B"
                  />
                  <path
                    d="M6.9304 4.1804C6.8608 3.93845 6.76302 3.72467 6.63707 3.53906C6.51113 3.35014 6.35701 3.19105 6.17472 3.06179C5.99574 2.92921 5.79025 2.82813 5.55824 2.75852C5.32955 2.68892 5.07599 2.65412 4.79759 2.65412C4.27723 2.65412 3.81984 2.78338 3.42543 3.0419C3.03433 3.30043 2.7294 3.67661 2.51065 4.17045C2.2919 4.66098 2.18253 5.26089 2.18253 5.97017C2.18253 6.67945 2.29025 7.28267 2.50568 7.77983C2.72112 8.27699 3.02604 8.65649 3.42045 8.91832C3.81487 9.17685 4.28054 9.30611 4.81747 9.30611C5.30469 9.30611 5.72064 9.21993 6.06534 9.04759C6.41335 8.87192 6.6785 8.625 6.8608 8.30682C7.0464 7.98864 7.1392 7.61245 7.1392 7.17827L7.5767 7.2429H4.9517V5.62216H9.21236V6.90483C9.21236 7.79972 9.02344 8.56866 8.6456 9.21165C8.26776 9.85133 7.7474 10.3452 7.08452 10.6932C6.42164 11.0379 5.66264 11.2102 4.80753 11.2102C3.85298 11.2102 3.01444 10.9998 2.2919 10.5788C1.56937 10.1546 1.00592 9.55303 0.601563 8.77415C0.200521 7.99195 0 7.06392 0 5.99006C0 5.16477 0.119318 4.42898 0.357955 3.78267C0.599905 3.13305 0.937973 2.58286 1.37216 2.1321C1.80634 1.68134 2.31179 1.3383 2.88849 1.10298C3.4652 0.867661 4.08996 0.75 4.76278 0.75C5.33949 0.75 5.87642 0.834517 6.37358 1.00355C6.87074 1.16927 7.31155 1.40459 7.69602 1.70952C8.08381 2.01444 8.40033 2.37737 8.6456 2.7983C8.89086 3.21591 9.0483 3.67661 9.1179 4.1804H6.9304Z"
                    fill="#18181B"
                  />
                </svg>
                <div>
                  <button className="flex items-center gap-1 border rounded-md py-1 px-2">
                    <Image
                      src={"/hamburger.svg"}
                      alt={"hamburger"}
                      width={20}
                      height={20}
                    />
                    <span className="text-xs font-semibold">Menu</span>
                    <Image
                      src={"/reddot.svg"}
                      alt={"reddot"}
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button className="hidden sm:inline-flex ml-5 text-slate-400 text-xs rounded-lg py-1 px-3 text-center items-center mr-3 border gap-1 w-auto">
                  <span className="font-semibold text-black">Hi,</span>
                  <span>{email}</span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_52)">
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="black"
                          stroke-width="1.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_52">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-3 mt-[-10px]">
            <button
              className="flex items-center justify-center text-[#B43030] text-xs rounded-lg py-1 px-3 border w-[195px] bg-white"
              onClick={() => logout()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mr-2"
              >
                <g clip-path="url(#clip0_1_56)">
                  <path
                    d="M11.6667 6.66668V5.00001C11.6667 4.55798 11.4911 4.13406 11.1785 3.8215C10.866 3.50894 10.442 3.33334 10 3.33334H4.16667C3.72464 3.33334 3.30072 3.50894 2.98816 3.8215C2.67559 4.13406 2.5 4.55798 2.5 5.00001V15C2.5 15.442 2.67559 15.866 2.98816 16.1785C3.30072 16.4911 3.72464 16.6667 4.16667 16.6667H10C10.442 16.6667 10.866 16.4911 11.1785 16.1785C11.4911 15.866 11.6667 15.442 11.6667 15V13.3333"
                    stroke="#B43030"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 10H17.5L15 7.5"
                    stroke="#B43030"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 12.5L17.5 10"
                    stroke="#B43030"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <span className="text-xs">Logout</span>
            </button>
          </div>
        </nav>
        <div className="bg-white flex flex-col gap-3 justify-between md:hidden lg:hidden p-4 w-auto">
          <div className="flex gap-1 items-center px-2">
            <CheckIcon
              color="white"
              className="bg-[#B43030] rounded-md p-1"
              size={20}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="12"
              viewBox="0 0 71 12"
              fill="none"
            >
              <path
                d="M62.5591 11.071V0.889191H63.792V5.94033H63.9114L68.4852 0.889191H70.096L65.8204 5.48294L70.096 11.071H68.6045L65.0648 6.33805L63.792 7.76987V11.071H62.5591Z"
                fill="#18181B"
              />
              <path
                d="M52.8992 3.43466C52.8396 2.93087 52.5976 2.53977 52.1734 2.26136C51.7491 1.98295 51.2288 1.84375 50.6123 1.84375C50.1615 1.84375 49.7671 1.91667 49.4291 2.0625C49.0943 2.20833 48.8325 2.40885 48.6436 2.66406C48.4579 2.91927 48.3651 3.20928 48.3651 3.53409C48.3651 3.80587 48.4298 4.03954 48.559 4.23509C48.6916 4.42732 48.8606 4.58807 49.0661 4.71733C49.2716 4.84328 49.4871 4.94768 49.7124 5.03054C49.9378 5.11009 50.145 5.17472 50.3339 5.22443L51.368 5.50284C51.6331 5.57244 51.9281 5.66856 52.2529 5.79119C52.5811 5.91383 52.8943 6.0812 53.1926 6.29332C53.4942 6.50213 53.7427 6.7706 53.9383 7.09872C54.1338 7.42685 54.2316 7.82955 54.2316 8.30682C54.2316 8.85701 54.0874 9.35417 53.7991 9.7983C53.5141 10.2424 53.0964 10.5954 52.5463 10.8572C51.9994 11.1191 51.3348 11.25 50.5526 11.25C49.8235 11.25 49.1921 11.1323 48.6585 10.897C48.1282 10.6617 47.7106 10.3336 47.4056 9.91264C47.104 9.49171 46.9333 9.00284 46.8936 8.44602H48.1663C48.1994 8.83049 48.3287 9.14867 48.5541 9.40057C48.7828 9.64915 49.0711 9.83475 49.4191 9.95739C49.7704 10.0767 50.1483 10.1364 50.5526 10.1364C51.0233 10.1364 51.4459 10.0601 51.8204 9.90767C52.1949 9.75189 52.4916 9.53646 52.7103 9.26136C52.9291 8.98295 53.0384 8.65814 53.0384 8.28693C53.0384 7.94886 52.944 7.67377 52.7551 7.46165C52.5661 7.24953 52.3176 7.07718 52.0093 6.9446C51.7011 6.81203 51.368 6.69602 51.01 6.59659L49.7572 6.23864C48.9617 6.00994 48.332 5.68348 47.868 5.25923C47.404 4.83499 47.172 4.27983 47.172 3.59375C47.172 3.02367 47.3261 2.52652 47.6343 2.10227C47.9459 1.67472 48.3635 1.34328 48.8872 1.10795C49.4141 0.869318 50.0025 0.75 50.6521 0.75C51.3083 0.75 51.8917 0.867661 52.4021 1.10298C52.9125 1.33499 53.3168 1.65317 53.6151 2.05753C53.9168 2.46188 54.0758 2.92093 54.0924 3.43466H52.8992Z"
                fill="#18181B"
              />
              <path
                d="M31.9879 11.071H30.6953L34.4339 0.889191H35.7067L39.4453 11.071H38.1527L35.1101 2.49999H35.0305L31.9879 11.071ZM32.4652 7.09374H37.6754V8.18749H32.4652V7.09374Z"
                fill="#18181B"
              />
              <path
                d="M16.9204 1.98294V0.889191H24.5568V1.98294H21.3551V11.071H20.1221V1.98294H16.9204Z"
                fill="#18181B"
              />
              <path
                d="M6.9304 4.1804C6.8608 3.93845 6.76302 3.72467 6.63707 3.53906C6.51113 3.35014 6.35701 3.19105 6.17472 3.06179C5.99574 2.92921 5.79025 2.82813 5.55824 2.75852C5.32955 2.68892 5.07599 2.65412 4.79759 2.65412C4.27723 2.65412 3.81984 2.78338 3.42543 3.0419C3.03433 3.30043 2.7294 3.67661 2.51065 4.17045C2.2919 4.66098 2.18253 5.26089 2.18253 5.97017C2.18253 6.67945 2.29025 7.28267 2.50568 7.77983C2.72112 8.27699 3.02604 8.65649 3.42045 8.91832C3.81487 9.17685 4.28054 9.30611 4.81747 9.30611C5.30469 9.30611 5.72064 9.21993 6.06534 9.04759C6.41335 8.87192 6.6785 8.625 6.8608 8.30682C7.0464 7.98864 7.1392 7.61245 7.1392 7.17827L7.5767 7.2429H4.9517V5.62216H9.21236V6.90483C9.21236 7.79972 9.02344 8.56866 8.6456 9.21165C8.26776 9.85133 7.7474 10.3452 7.08452 10.6932C6.42164 11.0379 5.66264 11.2102 4.80753 11.2102C3.85298 11.2102 3.01444 10.9998 2.2919 10.5788C1.56937 10.1546 1.00592 9.55303 0.601563 8.77415C0.200521 7.99195 0 7.06392 0 5.99006C0 5.16477 0.119318 4.42898 0.357955 3.78267C0.599905 3.13305 0.937973 2.58286 1.37216 2.1321C1.80634 1.68134 2.31179 1.3383 2.88849 1.10298C3.4652 0.867661 4.08996 0.75 4.76278 0.75C5.33949 0.75 5.87642 0.834517 6.37358 1.00355C6.87074 1.16927 7.31155 1.40459 7.69602 1.70952C8.08381 2.01444 8.40033 2.37737 8.6456 2.7983C8.89086 3.21591 9.0483 3.67661 9.1179 4.1804H6.9304Z"
                fill="#18181B"
              />
            </svg>
          </div>
          <button className="flex text-slate-400 text-xs rounded-lg py-1 px-3 text-center items-center mr-3 border gap-1 w-fit">
            <span className="font-semibold text-black">Hi,</span>
            <span>{email}</span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_52)">
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="black"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_52">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
          <button
            className="flex items-center justify-center text-[#B43030] text-xs rounded-lg py-1 px-3 border w-[195px] bg-white"
            onClick={() => logout()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="mr-2"
            >
              <g clip-path="url(#clip0_1_56)">
                <path
                  d="M11.6667 6.66668V5.00001C11.6667 4.55798 11.4911 4.13406 11.1785 3.8215C10.866 3.50894 10.442 3.33334 10 3.33334H4.16667C3.72464 3.33334 3.30072 3.50894 2.98816 3.8215C2.67559 4.13406 2.5 4.55798 2.5 5.00001V15C2.5 15.442 2.67559 15.866 2.98816 16.1785C3.30072 16.4911 3.72464 16.6667 4.16667 16.6667H10C10.442 16.6667 10.866 16.4911 11.1785 16.1785C11.4911 15.866 11.6667 15.442 11.6667 15V13.3333"
                  stroke="#B43030"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 10H17.5L15 7.5"
                  stroke="#B43030"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12.5L17.5 10"
                  stroke="#B43030"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span className="text-xs">Logout</span>
          </button>
        </div>
        <div className="flex overflow-hidden bg-white pt-16">
          <aside
            id="sidebar"
            className="fixed z-20 h-full top-0 left-0 pt-16 hidden md:hidden lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 "
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
              <div className="flex-1 flex flex-col pt-14 overflow-y-auto">
                <div className="flex-1 bg-white divide-y space-y-1">
                  <ul className="p-2 border-t-[1px] border-b-[1px]">
                    <li>
                      <a
                        href="/"
                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <div className="border-r-[1px] border-r-slate-200 pr-4">
                          <HomeIcon
                            size={25}
                            className="border rounded-md border-slate-200 p-1"
                          />
                        </div>
                        <span className="ml-3 text-xs font-semibold text-[#B43030]">
                          To-do-list
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" bg-white divide-y space-y-1">
                  <ul className="p-2 py-4 border-t-[1px] border-b-[1px]">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <div className="ml-3 text-xs">
                          <span className="font-semibold">
                            Copywright @2023
                          </span>
                          <span>- Gaweku Task</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShell;
