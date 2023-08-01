


import img from "../../../assets/images/bg1.jpeg";
import { Link } from "react-router-dom";

const About = () => {


  return (
    <div className="mt-2">
      <div className="hero min-h-screen bg-green-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="w-5/6 h-42 lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold p-8">About Us</h1>
            <p className="px-8 text-xl">
              SellCell provide you the best facility for buying and selling phones.
            </p>
            <p className="px-8 py-2 text-xl">
            SellCell has been described as the “Kayak for selling your old phone” and so far over $250million worth of phones and tech have been sold through our platform. SellCell also helps users compare deals across refurbished phones & tech from leading brands.
            </p>
            <Link className="btn btn-success rounded-none ml-8" to="/about">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;