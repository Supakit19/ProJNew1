import React, { useState } from "react";
import Join from "./modal";

const Tapuser = () => {
  return (
    <>
      <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0 m-5"
        role="tablist"
        data-twe-nav-ref
      >
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-home01"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-home01"
            data-twe-nav-active
            role="tab"
            aria-controls="tabs-home01"
            aria-selected="true"
          >
            FOODMENU
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-profile01"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-profile01"
            role="tab"
            aria-controls="tabs-profile01"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-messages01"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-messages01"
            role="tab"
            aria-controls="tabs-messages01"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
      </ul>

      <div className="mb-6 m-5">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-home01"
          role="tabpanel"
          aria-labelledby="tabs-home-tab01"
          data-twe-tab-active
        >
          <div className="container mx-auto flex items-center justify-center">
            <div className="grid grid-cols-1">
              <div className="container mx-auto flex items-center">
                <div className="image flex justify-center w-24 h-24 mr-4">
                  <img
                    className="ml-10 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1218653182129868810/Dtbezn3nNUxytg04aiLW83aVTf4sL0FJbWhPKPy9tjRWWn.png?ex=66087238&is=65f5fd38&hm=4c78f660443ae62fdfc83b450095e587cc76644ea211910f9954f39536991e90&"
                    alt="ตัวอย่างรูปภาพ"
                  />
                </div>
                <div className="m-4">
                  <div class="flex w-full flex-col px-4 py-4 mt-3">
                    <span class="font-semibold font-bold text-lg">แฮมเบอเกอร์</span>
                    <span class="float-right text-gray-400">180 บาท</span>
                  </div>
                  <div className="ml-32">
                    <Join />
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex items-center">
                <div className="image flex justify-center w-24 h-24 mr-4">
                  <img
                    className="ml-10 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1219402447148159037/image.png?ex=660b2c06&is=65f8b706&hm=aeb3cb53199248e6833cfc132e4b5a8ac06344e6e972e51420588ce1766a3e09&"
                    alt="ตัวอย่างรูปภาพ"
                  />
                </div>
                <div className="m-4">
                  <div class="flex w-full flex-col px-4 py-4 mt-3">
                    <span class="font-semibold font-bold text-lg">แฮมเบอเกอร์</span>
                    <span class="float-right text-gray-400">180 บาท</span>
                  </div>
                  <div className="ml-32">
                    <Join />
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex items-center">
                <div className="image flex justify-center w-24 h-24 mr-4">
                  <img
                    className="ml-10 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1219402491985264700/image.png?ex=660b2c11&is=65f8b711&hm=e164390eaf18a615a9b781c0b1f4674d8113dfbae37d186096bb8a977eaf3eaf&"
                    alt="ตัวอย่างรูปภาพ"
                  />
                </div>
                <div className="m-4">
                  <div class="flex w-full flex-col px-4 py-4 mt-3">
                    <span class="font-semibold font-bold text-lg">แฮมเบอเกอร์</span>
                    <span class="float-right text-gray-400">180 บาท</span>
                  </div>
                  <div className="ml-32">
                    <Join />
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex items-center">
                <div className="image flex justify-center w-24 h-24 mr-4">
                  <img
                    className="ml-10 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1219402534914097202/image.png?ex=660b2c1b&is=65f8b71b&hm=167c4f1c6479565a1455a5757f4725ccdec58a030c66ace566996e7025e4e66e&"
                    alt="ตัวอย่างรูปภาพ"
                  />
                </div>
                <div className="m-4">
                  <div class="flex w-full flex-col px-4 py-4 mt-3">
                    <span class="font-semibold font-bold text-lg">แฮมเบอเกอร์</span>
                    <span class="float-right text-gray-400">180 บาท</span>
                  </div>
                  <div className="ml-32">
                    <Join />
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex items-center">
                <div className="image flex justify-center w-24 h-24 mr-4">
                  <img
                    className="ml-10 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1218653182129868810/Dtbezn3nNUxytg04aiLW83aVTf4sL0FJbWhPKPy9tjRWWn.png?ex=66087238&is=65f5fd38&hm=4c78f660443ae62fdfc83b450095e587cc76644ea211910f9954f39536991e90&"
                    alt="ตัวอย่างรูปภาพ"
                  />
                </div>
                <div className="m-4">
                  <div class="flex w-full flex-col px-4 py-4 mt-3">
                    <span class="font-semibold font-bold text-lg">แฮมเบอเกอร์</span>
                    <span class="float-right text-gray-400">180 บาท</span>
                  </div>
                  <div className="ml-32">
                    <Join />
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex items-center">
                <div className="image flex justify-center w-24 h-24 mr-4">
                  <img
                    className="ml-10 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://cdn.discordapp.com/attachments/1195436273758912572/1218653182129868810/Dtbezn3nNUxytg04aiLW83aVTf4sL0FJbWhPKPy9tjRWWn.png?ex=66087238&is=65f5fd38&hm=4c78f660443ae62fdfc83b450095e587cc76644ea211910f9954f39536991e90&"
                    alt="ตัวอย่างรูปภาพ"
                  />
                </div>
                <div className="m-4">
                  <div class="flex w-full flex-col px-4 py-4 mt-3">
                    <span class="font-semibold font-bold text-lg">แฮมเบอเกอร์</span>
                    <span class="float-right text-gray-400">180 บาท</span>
                  </div>
                  <div className="ml-32">
                    <Join />
                  </div>
                </div>
              </div>
              <div className="container mx-auto flex items-center">
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Tapuser;
