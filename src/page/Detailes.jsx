import React from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function Detailes() {
  const [products, setProducts] = useState({});
  let { emlid } = useParams();
  const userid = localStorage.getItem("id");

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get(`https://fakestoreapi.com/products/${emlid}`)
      .then(function (response) {
        // handle success
        console.log(response.data);

        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const sendCart = () => {
    axios.post(`https://665736d49f970b3b36c8673a.mockapi.io/data`, {
      products,
      userid,
    });
  };
  return (
    <>
      <Nav />
      <div
        key={products.id}
        className=" bg-slate-100 pt-10  container mx-auto   shadow-xl glass h-[90vh] flex  items-start"
      >
        <img className="w-72 h-72 " src={products.image} alt="" srcset="" />
        <div className=" ml-20 h-96 flex-col bg--500  w-96 border-b">
          {" "}
          <p className=" text-2xl">{products.title}</p>
          <p className=" text-2xl">{products.description}</p>
          <p className=" text-2xl">{products.price}</p>
          <div className=""></div>
          <button className="btn btn-primary mt-4 flex" onClick={sendCart}>
            add to cart
          </button>
          <div className="flex h-40 items-end">
            <Link to="/home">
              <button className="btn" type="button">
                Back to home
              </button>
            </Link>
          </div>
        </div>{" "}
      </div>
      <Link to={`/cart/${products.id}`}> </Link>;
    </>
  );
}

export default Detailes;
