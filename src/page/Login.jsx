import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();
  useEffect(() => {
    getuser();
  }, []);

  const getuser = () => {
    axios
      .get("https://665736d49f970b3b36c8673a.mockapi.io/user")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const getusers = () => {
    const user = users.find(
      (user) => user.username === username && user.Pass === pass
    );
    if (!user) {
      setError("error");
    } else {
      localStorage.setItem("user", username);
      localStorage.setItem("id", user.id);

      nav("/home");
    }
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
                  for="text"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-1 text-gray-600 font-semibold"
                >
                  Password
                </label>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  oc
                  type="password"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div></div>
            </div>
            <button
              onClick={getusers}
              class="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="flex bg-red-300">
        {" "}
        <p>{error}</p>
      </div>
    </>
  );
}

export default Login;
