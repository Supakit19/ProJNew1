import { useNavigate } from "react-router-dom";

function User2() {
  const Navigate = useNavigate();
  return (
    <>
      <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" class="text-2xl font-bold text-gray-800">
          SUPAKIT
        </a>
        <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div class="relative">
            <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
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
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span class="font-semibold text-gray-900">Shipping</span>
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
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium">สรุปการสั่งซื้อ</p>
          <p class="text-gray-400">ตรวจสอบรายการของคุณ</p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="container mx-auto flex items-center">
              <div className="image flex justify-center w-24 h-24 mr-4">
                <img
                  className="ml-10 h-24 w-28 rounded-md border object-cover object-center"
                  src="https://cdn.discordapp.com/attachments/1195436273758912572/1218653182129868810/Dtbezn3nNUxytg04aiLW83aVTf4sL0FJbWhPKPy9tjRWWn.png?ex=66087238&is=65f5fd38&hm=4c78f660443ae62fdfc83b450095e587cc76644ea211910f9954f39536991e90&"
                  alt="ตัวอย่างรูปภาพ"
                />
              </div>
              <div className="m-4">
                <div class="flex w-full flex-col px-4 py-4">
                  <span class="font-semibold font-bold text-lg">
                    แฮมเบอเกอร์
                  </span>
                  <span class="float-right text-gray-400 flex">
                    <p class="float-right text-gray-400">55 บาท</p>
                    <p class="float-right text-gray-400 ml-2">หวาน 50%</p>
                  </span>
                  <p class="float-right text-gray-400 flex ">
                    จำนวน
                    <p class="float-right text-gray-400 ml-2">1 ชิ้น</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="container mx-auto flex items-center">
              <div className="image flex justify-center w-24 h-24 mr-4">
                <img
                  className="ml-10 h-24 w-28 rounded-md border object-cover object-center"
                  src="https://cdn.discordapp.com/attachments/1195436273758912572/1219404720804855848/image-removebg-preview_16.png?ex=660b2e24&is=65f8b924&hm=1788b4512ed2c54b0027fcffd2fb04582ee6e3b8fefd30b45c34a105db77d6a3&"
                  alt="ตัวอย่างรูปภาพ"
                />
              </div>
              <div className="m-4">
                <div class="flex w-full flex-col px-4 py-4">
                  <span class="font-semibold font-bold text-lg">
                    แฮมเบอเกอร์
                  </span>
                  <span class="float-right text-gray-400 flex">
                    <p class="float-right text-gray-400">180 บาท</p>
                    <p class="float-right text-gray-400 ml-2">หวาน 50%</p>
                  </span>
                  <p class="float-right text-gray-400 flex ">
                    จำนวน
                    <p class="float-right text-gray-400 ml-2">1 ชิ้น</p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p class="mt-8 text-lg font-medium">เลือกวิธีการชำระเงิน</p>
          <form class="mt-5 grid gap-6">
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  class="w-14 object-contain"
                  src="https://cdn.discordapp.com/attachments/1195436273758912572/1219403690754969600/image-removebg-preview_15.png?ex=660b2d2f&is=65f8b82f&hm=bbe36708486b9a80ab1313c5274bb7aafd89022a6805ad12b7cf7760024cef26&"
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Prompt Pay พร้อมเพย์</span>
                  <p class="text-slate-500 text-sm leading-6">
                    ระบบจะทำรายการ 1-2 นาที
                  </p>
                </div>
              </label>
            </div>
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  class="w-14 object-contain"
                  src="https://cdn.discordapp.com/attachments/1195436273758912572/1219404720804855848/image-removebg-preview_16.png?ex=660b2e24&is=65f8b924&hm=1788b4512ed2c54b0027fcffd2fb04582ee6e3b8fefd30b45c34a105db77d6a3&"
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">เงินสด</span>
                  <p class="text-slate-500 text-sm leading-6">
                    ระบบจะทำรายการ 1-2 นาที
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">รายละเอียดการจ่ายเงิน</p>
          <p class="text-gray-400">
            ดำเนินการคำสั่งซื้อของคุณให้เสร็จสิ้นโดยระบุรายละเอียดการชำระเงินของคุณ
          </p>
          <div class="">
            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">ราคาสินค้า</p>
                <p class="font-semibold text-gray-900">200 บาท</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">ค่าบริการ</p>
                <p class="font-semibold text-gray-900">00.00 บาท</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">ยอดรวมทั้งหมด</p>
              <p class="text-2xl font-semibold text-gray-900">200 บาท</p>
            </div>
          </div>
          <button  onClick={(e) => Navigate("/user2")} class="mt-4 mb-8 w-full rounded-md bg-red-500 px-6 py-3 font-medium text-white">
            ยืนยันคำสั่งซื้อ
          </button>
        </div>
      </div>
    </>
  );
}
export default User2;
