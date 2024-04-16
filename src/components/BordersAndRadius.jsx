const BordersAndRadius = () => {
  return (
    <>
      <div className="w-96 m-3 p-5 border">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-4 border-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-x-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-y-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-t-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-b-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      {/* Border Radius */}

      <div className="w-96 m-3 p-5 border-4 rounded">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-4 rounded-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-4 rounded-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-4 rounded-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-4 rounded-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-4 rounded-t-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      <div className="w-96 m-3 p-5 border-4 rounded-b-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem!
      </div>

      {/* Outline */}
      <button className="outline outline-8 outline-offset-2 outline-red-500">
        Click
      </button>
    </>
  );
};

export default BordersAndRadius;
