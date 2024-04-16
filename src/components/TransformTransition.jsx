import Image3 from "../assets/img3.jpg";

const TransformTransition = () => {
  return (
    <div>
      {/* No transition */}
      <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700">
        Click me
      </button>

      {/* Transition */}

      <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700  hover:opacity-20 transition duration-1000">
        Click me
      </button>

      {/* Transition and Transform */}

      <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 hover:rotate-12 transition-transform duration-1000">
        Click me
      </button>

      <img
        className="w-48 hover:rotate-180 hover:scale-75 hover:skew-x-12 transition duration-1000"
        src={Image3}
        alt="wew"
      />
    </div>
  );
};

export default TransformTransition;
