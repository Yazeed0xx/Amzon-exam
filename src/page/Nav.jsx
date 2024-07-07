import React from "react";
import { IoLocation } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Nav() {
  const user = localStorage.getItem("user");
  const [logged, setLogged] = useState(false);
  const nav = useNavigate();

  const remove = () => {
    localStorage.removeItem(user);
    nav("/login");
  };
  return (
    <>
      <div className="bg-gray-900 pl-2  justify-between text-base font-bold   h-14 flex pt-1  text-white">
        <div className="flex gap-2 ">
          {" "}
          <Link to="/home">
            <button>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMN_aNrT4FSYSoMdrtGpobPpG8G-LKIONCg&s"
                alt=""
                srcset=""
                className="w-[60px] h-[40px]"
              />
            </button>
          </Link>
          <div className="text-sm mt-1 flex">
            <p className="text-wrap flex ml-2"> Dilever to</p>
            <p className="text-wrap flex ml-6 ">
              {" "}
              <IoLocation />
              sudi arabia
            </p>
          </div>
        </div>
        <div className="  pt-1 flex ">
          <input className="w-[600px] flex  h-10" type="search" />
          <button>
            <CiSearch className="size-7 relative bottom-2 " />
          </button>
        </div>
        <div className="text-white bg-gray-900  text-base w-[450px] flex gap-4 justify-end     ">
          <select className="bg-gray-900" name="" id="">
            <option value="">EN</option>
            <option value="">AR</option>
          </select>
          {user ? <p className="pt-3">{user}</p> : <p>Guest</p>}{" "}
          <button onClick={remove} className="btn">
            Logout
          </button>
          <p className="pt-3">returns</p>
          <IoCartOutline className="size-9 pt-2 mr-5" />
        </div>
      </div>
      <div className="bg-slate-800 w-[100%]  pl-1 text-xl pt-2 h-14 text-white">
        <div className="flex w-[600px]  justify-between pt-2">
          <button>
            <GiHamburgerMenu />
          </button>
          <p>all</p>
          <p>Today Deals</p>
          <p>Customer Service</p>
          <p>Registry</p>
          <p>gift Cards</p>
          <p>Sell</p>
        </div>
      </div>
      {/* <button onClick={remove}>Log out</button> */}
    </>
  );
}

export default Nav;
