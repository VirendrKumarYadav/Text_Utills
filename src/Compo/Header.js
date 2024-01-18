import React from "react";

const Header = () => {
  const filterImage = (e) => {
    console.log(e.terget.value);
  };

  return (
    <div className="font-serif flex flex-row justify-between max-px-3 py-3 bg-gray-300 items-center">
      <div className="flex gap-3 items-center ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrqvEDkNYT8EEfwsQ8CgoKLs1vU3SbdXIAg-uXeEU89RddoPE_01rCwQCoGFOPXWTumQ&usqp=CAU"
          className="rounded-full w-10"
        />
        <span className="text-2xl max-lg:text-lg font-bold font-sans text-blue-500 ">
          Rishi TextUtils
        </span>
      </div>

      <div className="flex gap-3 max-lg:flex-col my-2 mx-2">
        <input
          placeholder="Search..."
          className="py-1 px-2 rounded-lg max-w-40"
          onChange={(e) => filterImage(e)}
        ></input>
        <button class="blob-btn">
          Search
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              
            </span>
          </span>
        </button>

      </div>
    </div>
  );
};

export default Header;
