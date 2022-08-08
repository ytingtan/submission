import React from "react";
import DetailsButton from "../components/DetailsButton";
class ProductsNew extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    
    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Loading... </h1> </div> ;
   
        return (
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items.map((product) => (
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
              <h3 className="mt-4 text-lg text-gray-900">{product.title.substring(0, 25)}</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">${product.price}</p>
              <button class="mt-3 h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                Details
              </button>
              </div>
            </a>
            </div>
          ))}
        </div>
      </div>
    </div>
          
    );
}
}

export default ProductsNew;