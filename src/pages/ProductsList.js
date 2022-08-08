import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  //   let componentMounted = true;

  useEffect(() => {
    // this is too slow :(
    // const getProducts = async () => {
    //   setLoading(true);
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   if (componentMounted) {
    //     setProducts(await response.clone().json());
    //     setLoading(false);
    //   }
    //   return () => {
    //     componentMounted = false;
    //   };
    // };
    function fetchProducts() {
      setLoading(true);
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    }
    fetchProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        Please wait, products are loading...
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <div className="grid grid-cols-1 py-4 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div className="rounded-lg shadow-lg">
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="pl-5 pb-4">
                <h3 className="mt-4 text-lg text-gray-900">
                  {product.title.substring(0, 25)}
                </h3>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  ${product.price}
                </p>
                <button
                  class="mt-3 h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                ><NavLink to={`/products/${product.id}`}>
                    Details
                </NavLink>
                </button> 
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Products
        </h2>
        <div>{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
}
