import React from "react";
import Slider from "react-slick"; // import Slider component
import Tapuser from "./tap";
import { useNavigate } from "react-router-dom";

function User1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const Navigate = useNavigate();
  return (
    <>
      <div className="">
        <div class="min-h-screen bg-slate-50">
          <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
            <a href="#" class="text-2xl font-bold text-gray-800">
              SUPAKIT
            </a>
            <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
              <div class="relative">
                <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                  <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                      <a
                        class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <span class="font-semibold text-gray-900">Shop</span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                      href="#"
                    >
                      2
                    </a>
                    <span class="font-semibold text-gray-500">Shipping</span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                      href="#"
                    >
                      3
                    </a>
                    <span class="font-semibold text-gray-500">Payment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full">
              <Slider {...settings}>
                <div className="relative h-64 md:h-96 lg:h-128 xl:h-144">
                  <img
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1218653277898412163/ai-generated-8302143_1280.png?ex=6608724e&is=65f5fd4e&hm=112132e9f4ed8022d59c41a177bce311f389d15e59e32f651b0fa193b2ef89db&"
                    alt="Slide 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h2 className="text-xl font-bold">ชีสเบอร์เกอร์</h2>
                    <p className="text-base">89 บาท</p>
                    <button className="mt-2 py-1 px-3 text-center text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
                      สั่งเลย
                    </button>
                  </div>
                </div>
                <div className="relative h-64 md:h-96 lg:h-128 xl:h-144">
                  <img
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1218653335842984026/burger-8381561_1280.png?ex=6608725c&is=65f5fd5c&hm=e046486a4f5ab6d016367ae72d4479c6680771b7f5e762ac1cb06076e313ded4&"
                    alt="Slide 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h2 className="text-xl font-bold">ชีสเบอร์เกอร์อร่อย</h2>
                    <p className="text-base">89 บาท</p>
                    <button className="mt-2 py-1 px-3 text-center text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
                      สั่งเลย
                    </button>
                  </div>
                </div>
                <div className="relative h-64 md:h-96 lg:h-128 xl:h-144">
                  <img
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1218653335842984026/burger-8381561_1280.png?ex=6608725c&is=65f5fd5c&hm=e046486a4f5ab6d016367ae72d4479c6680771b7f5e762ac1cb06076e313ded4&"
                    alt="Slide 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h2 className="text-xl font-bold">ชีสเบอร์เกอร์อร่อยมาก</h2>
                    <p className="text-base">189 บาท</p>
                    <button className="mt-2 py-1 px-3 text-center text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
                      สั่งเลย
                    </button>
                  </div>
                </div>
                {/* เพิ่มรูปภาพอื่น ๆ ที่นี่ */}
              </Slider>
            </div>
          </div>
          <div className="">
            <Tapuser />
          </div>
          <div className="bg-white h-20 w-full flex justify-center fixed bottom-0">
            <div  onClick={(e) => Navigate("/user1")} className="btn bg-red-500 mt-4 mb-8 w-64 px-6 py-3 rounded-lg flex justify-between items-center hover:scale-110 hover:bg-red-700 duration-300">
              <h1 className="text-white font-thai">1 ชิ้น</h1>
              <h1 className="text-white font-thai">ยืนยันคำสั่งซื้อ</h1>
              <h1 className="text-white font-thai">199 บาท</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User1;
