import Narbar from "../moota/NavBar";
import { useNavigate } from "react-router-dom";

function Order1() {
  const Navigate = useNavigate();
  const tabal = () => {
    Navigate("/tabel");
  };
  return (
    <>
      <div className="bg-sky-50 h-screen">
        <Narbar />
        <div className="grid grid-cols-10 gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-10 xl:grid-cols-10">
          <div className="mt-5 m-2 shadow-40 bg-white border-radius-10 h-auto shadow-xl col-span-2 rounded-lg sm:grid-cols-2">
            <div class="mb-4 px-4 m-3">
              <div  onClick={(e) => Navigate("/Employee")} class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 hover:scale-110 duration-300 rounded-lg cursor-pointer">
                <svg
                  class="h-6 w-6 fill-current mr-2"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                    fill="currentColor"
                  />
                </svg>

                <span class="text-gray-700">สินค้า</span>
              </div>
              <div class="mt-2 w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200  hover:bg-gray-200 hover:scale-110 hover:bg-gray-400 duration-300 rounded-lg cursor-pointer">
                <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                  <path
                    d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
                    fill="currentColor"
                  />
                </svg>
                <span class="text-gray-700 ml-1 ">แดชบอร์ด</span>
              </div>
              <div
                onClick={tabal}
                class="mt-2 w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200  hover:bg-gray-200 hover:scale-110 hover:bg-gray-400 duration-300 rounded-lg cursor-pointer"
              >
                <svg
                  class="h-6 w-6 fill-current mr-2"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z"
                    fill="currentColor"
                  />
                </svg>

                <span class="text-gray-700">โต๊ะอาหาร</span>
              </div>
              <div
                onClick={(e) => Navigate("/Order")}
                class="mt-2 w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200  bg-gray-200 hover:bg-gray-200 hover:scale-110 hover:bg-gray-400 duration-300 rounded-lg cursor-pointer"
              >
                <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                  <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
                </svg>
                <span class="text-gray-700">คำสั่งซื้อ</span>
              </div>
              <div class="mt-2 w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 hover:scale-110 hover:bg-gray-400 duration-300 rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 fill-current mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-700">คูปอง</span>
              </div>
              <div class="mt-2 w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 hover:scale-110 hover:bg-gray-400 duration-300 rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 fill-current mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                </svg>

                <span class="text-gray-700">บันทึกรายการขาย</span>
              </div>
            </div>

            <div class="mb-4 px-4">
              <p class="pl-4 text-sm font-semibold mb-1">PRODUCTS</p>
              {/* <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                  <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
                </svg>
                <span class="text-gray-700">Add Product</span>
              </div>
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                  <path d="M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"></path>
                </svg>
                <span class="text-gray-700">View Products</span>
              </div> */}
            </div>
          </div>
          <div className="mt-5 col-span-6 m-2 rounded-lg sm:grid-cols-8">
            <div class="grid gap-x-8 gap-y-4 grid-cols-5">
              <button
                onClick={(e) => Navigate("/Order")}
                class="bg-white px-4 py-2 rounded-md text-sm font-medium hover:scale-110 hover:bg-white duration-300"
              >
                คำสั่งซื้อ
              </button>
              <button
                onClick={(e) => Navigate("/Order1")}
                class="bg-purple-500 px-4 py-2 rounded-md text-sm font-medium  text-white hover:scale-110 hover:bg-purple-600 duration-300"
              >
                ทำรายการเสร็จสิ้น
              </button>
              <button class="bg-white px-4 py-2 rounded-md text-sm font-medium">
                บันทึกรายการขาย
              </button>
              <button class="bg-white px-4 py-2 rounded-md text-sm font-medium">
                เพิ่มเติม...
              </button>
              <button class="bg-white px-4 py-2 rounded-md text-sm font-medium">
                เพิ่มเติม...
              </button>
            </div>
            <div className="mt-5 shadow-40 bg-white border-radius-10 h-96 shadow-xl rounded-lg">
              <div class="grid gap-x-2 gap-y-10 grid-cols-6 px-5 ml-2 ">
                <div class="bg-gray-200 size-24 rounded-md mt-5"></div>
              </div>
            </div>
          </div>

          <div className="mt-10 shadow-40 bg-white border-radius-10 h-auto shadow-xl col-span-2 m-2 rounded-lg h-auto">
            <div class="container mx-auto flex items-center">
              <div class="image flex justify-center w-24 h-24 mr-4">
                <img
                  src="https://cdn.discordapp.com/attachments/1195436273758912572/1215695518580211783/image-removebg-preview_1.png?ex=65fdafae&is=65eb3aae&hm=c686dab5aa52534fc9f520bc7084670bd3aeef60fded9edb0683ba2424f7949b&"
                  alt="ตัวอย่างรูปภาพ"
                />
              </div>
              <div class="text">
                <h1 class="mb-4">ชานมไข่มุก</h1>
                <p class="text-sm">ราคา: 50 บาท</p>
              </div>
            </div>
            <hr className="m-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Order1;
