import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addToCart } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";
const ProductDetails = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useNavigate();
  const addProduct = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  }

  useEffect(() => {
    const getProduct = () => {
      setLoading(true);
      axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Please wait, products are loading...</>;
  };

  const ShowProductNew = () => {
    return (
      <div className="bg-white">
        <div className="pt-6">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-center object-cover"
              />
            </div>

            
            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h3 className="capitalize text-lg text-black-700">
                {product.category}
              </h3>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {product.title}
                </h1>
              </div>

              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">${product.price}</p>

                <form className="mt-10">
                 
                  <button
                  className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => addProduct(product)}
                  type="submit"
                >Add to Cart
                </button> 
                </form>
              </div>

              <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <div>
                  <h3 className="sr-only">Description</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      {loading ? <Loading /> : <ShowProductNew />}
    </div>
  );
};

export default ProductDetails;
