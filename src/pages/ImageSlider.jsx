import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import bh1 from "../images/bh1.webp"
import bh2 from "../images/bh2.webp"
import bh3 from "../images/bh3.webp"
import bh4 from "../images/bh4.webp"
import bh5 from "../images/bh5.webp"
import bh6 from "../images/bh6.webp"
import bh7 from "../images/bh7.webp"




const ImageSlider=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
      };
      

    return(
        <>
    <Slider {...settings}>
      <div>
      <img src={bh1} />
      </div>
      <div>
      <img src={bh2} />
      </div>
      <div>
      <img src={bh3} />
      </div>
      <div>
      <img src={bh4} />
      </div>
      <div>
      <img src={bh5} />
      </div>
      <div>
      <img src={bh6} />
      </div>
      <div>
      <img src={bh7} />
      </div>
    </Slider>
        </>
    )
}
export default ImageSlider;