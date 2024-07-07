import React from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("https://fakestoreapi.com/products")
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
  return (
    <>
      <div className="">
        <Nav />
      </div>

      <div className="flex  flex-wrap justify-between mt-11 max-sm:justify-end">
        {products.map((elm) => (
          <>
            <div className="card mt-3  card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={elm.image} alt="Shoes" className="w-full h-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{elm.title}</h2>
                <p>{elm.price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/det/${elm.id}`}>
                    {" "}
                    <button className="btn btn-primary">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
