import Image1 from "../assets/img1.jpg";
import Image2 from "../assets/img2.jpg";
import Image3 from "../assets/img3.jpg";
import Image4 from "../assets/img4.jpg";

const Columns = () => {
  return (
    <>
      {/* Columns */}
      <div className="columns-4 gap-2">
        <img className="w-full" src={Image1} alt="" />
        <img className="w-full" src={Image2} alt="" />
        <img className="w-full" src={Image3} alt="" />
        <img className="w-full" src={Image4} alt="" />
      </div>

      <div className="columns-xs">
        <img className="w-full" src={Image1} alt="" />
        <img className="w-full" src={Image2} alt="" />
        <img className="w-full" src={Image3} alt="" />
        <img className="w-full" src={Image4} alt="" />
      </div>

      <div className="columns-4">
        <img className="w-full aspect-video" src={Image1} alt="" />
        <img className="w-full" src={Image2} alt="" />
        <img className="w-full aspect-square" src={Image3} alt="" />
        <img className="w-full" src={Image4} alt="" />
      </div>
    </>
  );
};

export default Columns;
