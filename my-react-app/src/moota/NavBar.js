import { useState } from "react";
function Narbar() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <div className="flex items-center justify-between rounded-6 shadow-40 bg-white border-radius-10 h-auto shadow-xl rounded-lg">
        <img
          className=""
          src="https://cdn.discordapp.com/attachments/981915915241291787/1212780656703185017/image-removebg-preview.png?ex=65f31500&is=65e0a000&hm=5d6e13ff458bd921d1bfb9b1660aa74c6acb73bb3eab5a9a0fe5362cd70a97f3&"
          style={{ width: "75px", height: "75px" }}
        />
        <h1 className="font-sans font-bold text-center"> {ctime}</h1>
        
      </div>
    </>
  );
}

export default Narbar;
