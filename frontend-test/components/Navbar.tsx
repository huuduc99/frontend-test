import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [current, setCurrent] = useState("home");
  const onClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      label: "自分の記録",
      url: "",
      icon: (
        <Image
          src="/static/images/icon_memo.png"
          alt="App Logo"
          width={30}
          height={30}
        />
      ),
    },
    {
      label: "チャレンジ",
      url: "",
      icon: (
        <Image
          src="/static/images/icon_challenge.png"
          alt="App Logo"
          width={32}
          height={32}
        />
      ),
    },
    {
      label: "お知らせ",
      url: "",
      icon: (
        <div className="relative">
          <Image
            src="/static/images/icon_info.png"
            alt="App Logo"
            width={32}
            height={32}
          />

          <div className="rounded-full bg-primary-color w-[24px] h-[24px] flex justify-center items-center absolute -top-2 -right-3">
            <p className="mb-0 text-white">1</p>
          </div>
        </div>
      ),
    },
    {
      label: "",
      url: "",
      icon: (
          <Image
            src="/static/images/icon_menu.png"
            alt="App Logo"
            width={32}
            height={32}
          />
      ),
    },
  ];

  return (
    <div className="bg-[#414141] fixed inset-x-0 top-0 z-50">
      <div className="w-5/6 mx-auto py- grid grid-cols-5 gap-4">
        <div className="col-span-2 h-[64px]">
          <Link href="/">
            <a className="block pl-[160px]">
              <Image
                src="/static/images/logo.png"
                alt="App Logo"
                width="144px"
                height="64px"
                className="bg-transparent"
              />
            </a>
          </Link>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <ul className="flex flex-row">
            {items.map((item, index) => {
              return (
                <li key={index} className="">
                  <Link href={item.url || ""}>
                    <a className="flex flex-row justify-center items-center px-[16px] py-[12px]">
                      {item.icon}
                      <p className="ml-[8px] mb-0 text-white text-md">
                        {item.label}
                      </p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
