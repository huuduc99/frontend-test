import { Button, Divider, Image } from "antd";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FloatButton } from "antd";

function Health() {
  const recommendsItem = [
    {
      title: "RECOMMENDED COLUMN",
      subTitle: "オススメ",
    },
    {
      title: "RECOMMENDED DIET",
      subTitle: "ダイエット",
    },
    {
      title: "RECOMMENDED BEAUTY",
      subTitle: "美容",
    },
    {
      title: "RECOMMENDED HEALTH",
      subTitle: "健康",
    },
  ];

  const gallery = [
    {
      label: "2021.05.17 23:25",
      image: "bg-[url('/static/images/column-1.jpg')]",
      url: "",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
    },
    {
      label: "2021.05.17 23:25",
      image: "bg-[url('/static/images/column-2.jpg')]",
      url: "",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
    },
    {
      label: "2021.05.17 23:25",
      image: "bg-[url('/static/images/column-3.jpg')]",
      url: "",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
    },
    {
      label: "2021.05.17 23:25",
      image: "bg-[url('/static/images/column-4.jpg')]",
      url: "",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
    },
    {
      label: "2021.05.17 23:25",
      image: "bg-[url('/static/images/column-5.jpg')]",
      url: "",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
    },
    {
      label: "2021.05.17 23:25",
      image: "bg-[url('/static/images/column-6.jpg')]",
      url: "",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
    },
    {
      label: "2021.05.17 23:25",
      image: "bg-[url('/static/images/column-7.jpg')]",
      url: "",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
    },
    {
      label: "2021.05.17 23:25",
      image: "bg-[url('/static/images/column-8.jpg')]",
      url: "",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="mt-[64px] w-[80%] mx-auto">
        <section className="grid grid-cols-4 gap-4 mt-[120px] mb-[56px]">
          {recommendsItem.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full bg-dark-gray max-w-[76%] mx-auto p-[24px] flex flex-col justify-center items-center"
              >
                <div>
                  <p className="font-normal text-light-orange text-2xl text-center">
                    {item.title}
                  </p>

                  <div className="border-b-2 border-[#ffffff30] w-[56px] mx-auto mt-[10px]"></div>
                </div>

                <p className="text-white text-center text-lg mt-[8px] font-hiragino">
                  {item.subTitle}
                </p>
              </div>
            );
          })}
        </section>

        <section className="grid grid-cols-4 gap-4 mb-[24px]">
          {gallery.map((item, index) => {
            return (
              <div key={index} className="">
                <div className={`relative h-[205px] ${item.image} bg-cover`}>
                  <Link href={item.url}>
                    <a className="block bg-light-orange text-white text-center px-[8px] py-[7px] absolute bottom-0 left-0">
                      {item.label}
                    </a>
                  </Link>
                </div>

                <div>
                  <p className="text-md font-hiragino mt-[8px]">{item.title}</p>
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-normal-orange text-base font-hiragino mr-2">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className="flex justify-center items-center mb-[64px]">
          <Link href="/health">
            <Button
              className="text-white mt-[28px] w-[296px] h-[56px] border-0 text-lg font-hiragino"
              style={{
                background:
                  "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
              }}
            >
              自分の日記をもっと見る
            </Button>
          </Link>
        </section>

        <FloatButton.BackTop />
      </main>

      <Footer />
    </>
  );
}

export default Health;
