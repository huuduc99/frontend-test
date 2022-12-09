import React, { useState } from "react";
import { Image } from "antd";
import Link from "next/link";

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
          src="/static/images/icon_memo.jpg"
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
          src="/static/images/icon_challenge.jpg"
          alt="App Logo"
          width={30}
          height={30}
        />
      ),
    },
    {
      label: "お知らせ",
      url: "",
      icon: (
        <div className="relative">
          <Image
            src="/static/images/icon_info.jpg"
            alt="App Logo"
            width={30}
            height={30}
          />

          <p className="mb-0 rounded-full text-white bg-primary-color text-center absolute w-[20px] h-[20px] inset-y-0">1</p>
        </div>
      ),
    },
    {
      label: "",
      url: "",
      icon: (
          <Image
            src="/static/images/icon_menu.jpg"
            alt="App Logo"
            width={30}
            height={30}
          />
      ),
    },
  ];

  return (
    <div className="min-h-full bg-[#414141]">
      <div className="w-5/6 mx-auto py- grid grid-cols-5 gap-4">
        <div className="col-span-2 h-64px">
          <Image
            src="/static/images/app-logo.jpg"
            alt="App Logo"
            width="144px"
            height="100%"
            className="bg-transparent"
            preview={false}
          />
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <ul className="flex flex-row">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.url || ''}>
                    <a className="flex flex-row justify-center items-center px-[16px] py-[20px]">
                      {item.icon}
                      <p className="ml-[8px] mb-0 text-white text-md">{item.label}</p>
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
