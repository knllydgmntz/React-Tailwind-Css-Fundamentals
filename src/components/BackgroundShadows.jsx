import Image1 from "../assets/img1.jpg";

const BackgroundShadows = () => {
  return (
    <>
      <div>
        <img
          className="h-64 w-72 bg-no-repeat bg-cover bg-center"
          src={Image1}
          alt=""
        />
      </div>

      {/* Gradients */}
      <div className="h-24 bg-gradient-to-l from-cyan-500 to-blue-500"></div>

      {/* Shadows */}
      <div className="w-96 mt-6- ml-4 p-3 shadow-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
        hic officia harum corporis mollitia natus, veritatis suscipit nulla
        rerum!
      </div>
      <div className="w-96 mt-6- ml-4 p-3 shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
        hic officia harum corporis mollitia natus, veritatis suscipit nulla
        rerum!
      </div>
      <div className="w-96 mt-6- ml-4 p-3 shadow-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
        hic officia harum corporis mollitia natus, veritatis suscipit nulla
        rerum!
      </div>
      <div className="w-96 mt-6- ml-4 p-3 shadow-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
        hic officia harum corporis mollitia natus, veritatis suscipit nulla
        rerum!
      </div>
      <div className="w-96 mt-6- ml-4 p-3 shadow-2xl shadow-blue-500/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
        hic officia harum corporis mollitia natus, veritatis suscipit nulla
        rerum!
      </div>
      <div className="w-96 mt-6- ml-4 p-3 shadow-2xl shadow-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
        hic officia harum corporis mollitia natus, veritatis suscipit nulla
        rerum!
      </div>

      {/* Mix blend */}
      <div className="flex justify-center -space-x-24">
        <div className="mix-blend-multiply bg-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero
          quo aperiam ex fugiat ipsam non fugit sequi aliquam dolorem.
        </div>
        <div className="mix-blend-multiply bg-pink-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam
          doloremque nulla fugit? Rem tempora minus eligendi? Temporibus, esse
          commodi.
        </div>
      </div>
    </>
  );
};

export default BackgroundShadows;
