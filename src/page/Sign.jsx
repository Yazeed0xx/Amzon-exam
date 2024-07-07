import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Sign() {
  const [username, setUser] = useState("");
  const [Pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const nav = useNavigate();

  const info = () => {
    axios.post("https://665736d49f970b3b36c8673a.mockapi.io/user", {
      username,
      Pass,
      email,
    });
  };

  const send = () => {
    nav("/login");
    info();
  };

  return (
    <>
      <div class="h-screen bg-slate-50 flex justify-center items-center w-full">
        <form>
          <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <img
              class="h-14 mb-4 mx-auto"
              src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"
              alt=""
            />
            <div class="space-y-4">
              <h1 class="text-center text-2xl font-semibold text-gray-600">
                Register
              </h1>
              <div>
                <label
                  for="email"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Email
                </label>
                <input
                  value={Pass}
                  onChange={(e) => setPass(e.target.value)}
                  oc
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Password
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>
            <button
              onClick={send}
              class="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Sign;
