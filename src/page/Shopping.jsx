import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Shopping() {
  const [products, setProducts] = useState([]);

  let { emlid } = useParams();

  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios
      .get(`https://665736d49f970b3b36c8673a.mockapi.io/data`)
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
      <div className="flex bg-red-400">
        {/* {products.map((elm) => (
          <>
            <div key={elm.id} className=""> */}
        <p>{products.description}</p>
      </div>
      {/* </> */}

      {/* </div> */}
    </>
  );
}

export default Shopping;
