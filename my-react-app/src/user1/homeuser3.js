import { useNavigate } from "react-router-dom";

function User3() {
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
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  3
                </a>
                <span class="font-semibold text-gray-900">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium">โปรดชำละเงิน</p>
          <p class="text-gray-400">โปรดชำละเงินภายใน5นาที</p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <img src="https://cdn.discordapp.com/attachments/1195436273758912572/1216365713099587644/ukzBif_qrcode.png?ex=66095a58&is=65f6e558&hm=231702b67d9800160ffab25ec20a8185b8cd79ff9d7abf987570466bde94fd0f&" />
          </div>
          <p class="text-xl font-medium px-4 pt-8">
            โปรดแนบสลีป
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
            />
          </p>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-gray-400">
            เมื่อดำเนินการคำสั่งซื้อสำเร็จระบบจะนำท่านกลับไปยังหน้าต่างแรก
          </p>

          <button
            onClick={(e) => Navigate("/user")}
            class="mt-4 mb-8 w-full rounded-md bg-red-500 px-6 py-3 font-medium text-white"
          >
            เรียบร้อย
          </button>
        </div>
      </div>
    </>
  );
}
export default User3;
