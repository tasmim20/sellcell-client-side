import img1 from "../../../assets/images/bg2.jpeg";
import img2 from "../../../assets/images/bg1.jpeg";
import { FaShoppingCart } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full  " style={{height: 600}}>
      <div id="slide1" className="carousel-item relative  lg:h-full w-full">
        <img src={img1} className=" " />
        <div className="absolute  flex items-center h-full left-0 top-0 ">
          <div className="text-center pl-20 lg:pl-48 py-4 w-full">
            <h2 className="lg:text-xl font-bold border bg-success md:p-4">
              Big Discount!!
            </h2>
            <p className="lg:text-6xl text-green-900 text-2xl lg:py-4 font-bold">
              20% offer
            </p>
            <div>
              <button className="btn  btn-success  rounded-none hover:bg-success-200 mr-3">
                Buy Now <FaShoppingCart className="inline-block ms-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-green-100">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-green-100">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative  lg:h-full w-full">
        <img src={img1} className="" />
        <div className="absolute  flex items-center h-full left-0 top-0 ">
          <div className="text-center pl-20 lg:pl-48 py-4 w-full">
          <h2 className="lg:text-xl font-bold border bg-success md:p-4">
              Big Discount!!
            </h2>
            <p className="lg:text-6xl text-green-900 text-2xl lg:py-4 font-bold">
              20% offer
            </p>
            <div>
              <button className="btn  btn-success  rounded-none hover:bg-success-200 mr-3">
                Buy Now <FaShoppingCart className="inline-block ms-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-cyan-200">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-cyan-200">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;