import Image1 from "../assets/img1.jpg";
import Image2 from "../assets/img2.jpg";
import Image3 from "../assets/img3.jpg";
import Image4 from "../assets/img4.jpg";
import Image5 from "../assets/img5.jpg";

const Filters = () => {
  return (
    <>
      <div className="blur-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
        quae!
      </div>

      <div className="blur">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
        quae!
      </div>
      <img className="blur-xl" src={Image1} alt="wew" />

      {/* Brightness */}

      <img className="brightness-50" src={Image2} alt="wew" />
      <img className="brightness-75" src={Image2} alt="wew" />
      <img className="brightness-150" src={Image2} alt="wew" />
      <img className="brightness-200" src={Image2} alt="wew" />

      {/* Contrast */}
      <img className="contrast-0" src={Image3} alt="wew" />
      <img className="contrast-50" src={Image3} alt="wew" />
      <img className="contrast-100" src={Image3} alt="wew" />
      <img className="contrast-150" src={Image3} alt="wew" />
      <img className="contrast-200" src={Image3} alt="wew" />

      {/* Grayscale */}
      <img className="grayscale" src={Image4} alt="wew" />

      {/* Invert */}
      <img className="invert" src={Image4} alt="wew" />

      {/* Sepia */}
      <img className="sepia" src={Image4} alt="wew" />

      {/* Hue Rotate */}
      <img className="hue-rotate-15" src={Image5} alt="wew" />
      <img className="hue-rotate-60" src={Image5} alt="wew" />
      <img className="hue-rotate-90" src={Image5} alt="wew" />
      <img className="hue-rotate-180" src={Image5} alt="wew" />
    </>
  );
};

export default Filters;
