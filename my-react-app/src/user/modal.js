import React, { useState } from "react";

function Join() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
      setCount((prevCount) => prevCount - 1);
    };

    return (
      <div className="flex items-center justify-center mt-3">
        <button
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:scale-110 hover:bg-red-700 duration-300"
          onClick={decrement}
        >
          -
        </button>
        <span className="px-4">{count}</span>
        <button
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:scale-110 hover:bg-red-700 duration-300"
          onClick={increment}
        >
          +
        </button>
      </div>
    );
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-red-500 hover:scale-110 hover:bg-red-500 duration-300 text-white font-bold py-2 px-4 rounded-lg text-l"
      >
        เพิ่มรายการ
      </button>
      <div
        className={`fixed inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-900 opacity-75"
          onClick={closeModal}
        ></div>
        <div className="relative bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300">
          <span className="font-bold text-xl">ความหวาน</span>

          <div className="flex space-x-2 mt-4 flex items-center justify-center">
            <span class="loading loading-dots loading-md mr-3"></span>
            <label className="text-center font-bold transition-opacity hover:opacity-50 ml-3">
              <input
                type="radio"
                className="flex items-center justify-center w-6 h-6 accent-red-500 bg-gray-100 rounded-lg dark:bg-gray-600 transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
                name="size"
                value="xs"
              />
              <span className="font-bold">0%</span>
            </label>
            <label className="text-center font-bold transition-opacity hover:opacity-50">
              <input
                type="radio"
                className="flex items-center justify-center w-6 h-6 accent-red-500 transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
                name="size"
                value="s"
              />
              <span className="font-bold">20%</span>
            </label>
            <label className="text-center font-bold transition-opacity hover:opacity-50">
              <input
                type="radio"
                className="flex items-center justify-center w-6 h-6 accent-red-500 transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
                name="size"
                value="m"
              />
              <span className="font-bold">50%</span>
            </label>
            <label className="text-center font-bold transition-opacity hover:opacity-50">
              <input
                type="radio"
                className="flex items-center justify-center w-6 h-6 accent-red-500 transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
                name="size"
                value="l"
              />
              <span className="font-bold">80%</span>
            </label>
            <span class="loading loading-dots loading-md ml-10"></span>
          </div>
          <label className="form-control mt-3">
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="เพิ่มเติม"
            ></textarea>
          </label>
          <Counter />
          <h1 className="mt-3">
            ตรวจสอบจำนวนและสิ้นค้าที่ต้องการสั่งให้เรียบร้อย
          </h1>
          <div className="flex items-center justify-end mt-3">
            <button className="bg-red-500 hover:scale-110 hover:bg-red-500 duration-300 text-white font-bold py-2 px-4 rounded-lg text-l">
              เพิ่มสินค้า
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
