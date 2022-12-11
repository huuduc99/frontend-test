import { Button, FloatButton, Image } from "antd";
import Link from "next/link";
import React from "react";
import ChartData from "../../components/ChartData";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { AuthProvider } from "../../context/AuthContext";

function MyRecords() {
  const recordsItem = [
    {
      title: "BODY RECORD",
      subTitle: "自分のカラダの記録",
      image: "MyRecommend-1.jpg",
      url: "#body-chart",
    },
    {
      title: "MY EXERCISE",
      subTitle: "自分の運動の記録",
      image: "MyRecommend-2.jpg",
      url: "#my-exercises",
    },
    {
      title: "MY DIARY",
      subTitle: "自分の日記",
      image: "MyRecommend-3.jpg",
      url: "#my-diary",
    },
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        label: "BODY RECORD",
        display: true,
      },
    },
  };

  const labels = [
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random()),
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random()),
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
    ],
  };

  return (
    <>
      <Navbar />

      <AuthProvider>
        <main className="mt-[64px] w-[80%] mx-auto">
          <section className="grid grid-cols-3 gap-4 mt-[120px] mb-[56px]">
            {recordsItem.map((item, index) => {
              return (
                <Link href={item.url}>
                  <div
                    key={index}
                    className="w-full bg-light-orange max-w-[80%] mx-auto p-[24px] h-[288px]"
                  >
                    <div
                      className={`relative mx-auto bg-[url('/static/images/MyRecommend-3.jpg')] bg-cover w-full h-full`}
                    >
                      <div className="absolute inset-0 bg-[#00000090] flex flex-col items-center justify-center">
                        <p className="text-light-orange text-center font-normal text-3xl">
                          {item.title}
                        </p>

                        <p className="bg-normal-orange text-white text-center font-light text-xsm px-3 py-1 mt-[11px]">
                          {item.subTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>

          <section
            id="body-chart"
            className="bg-dark-gray py-[16px] px-[24px] mb-[56px]"
          >
            <div className="text-white flex">
              <p className="text-md leading-[18px] w-[96px]">BODY RECORD</p>

              <span className="text-2xl">2021.05.21</span>
            </div>
            <ChartData
              options={options}
              chartData={chartData}
              styles={{ maxHeight: 400 }}
            />
          </section>

          <section
            id="my-exercises"
            className="bg-dark-gray py-[16px] px-[24px] mb-[56px]"
          >
            <div className="text-white flex">
              <p className="text-md leading-[18px] w-[92px]">MY EXERCISE</p>

              <span className="text-2xl">2021.05.21</span>
            </div>

            <div className="overflow-auto max-h-[264px] mt-[4px]">
              <ul className="grid grid-cols-2 gap-y-4 gap-x-[40px] list-disc">
                {[...Array(10)].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-row justify-between border-b-2 border-gray-color"
                    >
                      <p className="text-white text-2xl mb-0 flex flex-col font-hiragino">
                        家事全般（立位・軽い）
                        <span className="text-light-orange text-xl">
                          26kcal
                        </span>
                      </p>
                      <p className="text-light-orange text-2xl">10 min</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section id="my-diary" className="grid grid-cols-4 gap-4 mb-[30px]">
            {[...Array(8)].map((item, index) => {
              return (
                <div
                  key={index}
                  className="border border-dark-gray p-[16px] pb-[30px] h-[241px]"
                >
                  <p className="mb-0 text-2xl w-[147px]">2021.05.21 23:25</p>

                  <p className="font-hiragino mb-[12px]">
                    私の日記の記録が一部表示されます。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
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
      </AuthProvider>

      <Footer />
    </>
  );
}

export default MyRecords;
