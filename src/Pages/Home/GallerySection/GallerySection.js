import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const GallerySection = () => {
  const carouselRef = useRef(null);

  function calculateCenterSlidePercentage() {
    if (window.innerWidth < 640) {
      return 70;
    } else if (window.innerWidth < 1024) {
      return 25;
    } else {
      return 27;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      //   carouselRef.current.next();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=" p-4 bg-green-50 rounded-xl mt-24">
      <p className="text-xl lg:text-5xl font-bold text-green-600 text-center m-4 p-4">
        PHONE GALLERY
      </p>
      <Carousel
        ref={carouselRef}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={calculateCenterSlidePercentage()}
        itemClass="carousel-item-padding-40-px"
        interval={2000}
        stopOnHover={false}
      >
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img  src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"   alt="Image 1" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img  src="https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg" alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img  src="https://i0.wp.com/www.mobilebd.co/wp-content/uploads/2020/12/Apple-iPhone-XS-Max-Official-images.png?fit=500%2C500&ssl=1" alt="Image 3" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img  src="https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg" alt="Image 4" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img  src="https://mobilefactbd.com/wp-content/uploads/2019/12/Symphony-i60.jpg" alt="Image 5" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src="https://www.bdprice.com.bd/wp-content/uploads/2022/04/Symphony-G50-Blue-Price-in-Bangladesh.jpg" alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img  src="https://www.mobiledokan.co/wp-content/uploads/2022/04/Symphony-Z42-Green.jpg" alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img  src="https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg" alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src="https://mobilefactbd.com/wp-content/uploads/2019/12/Symphony-i60.jpg" alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img  src="https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg" alt="Image 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default GallerySection;