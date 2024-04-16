import imgLogo from "../assets/img1.jpg";

const LayoutPosition = () => {
  return (
    <>
      {/* Positioning */}
      <div className="relative w-1/2 h-12 bg-red-200">
        <p>Parent Element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>Absolute Child</p>
        </div>
      </div>

      {/* Top left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Top right corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom right corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Span top edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Span left edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
      </div>

      {/* Span right edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 right-0 w-16 bg-yellow-300"></div>
      </div>

      {/* Span right edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Display Classes */}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam
        maiores inventore{" "}
        <span className="inline font-bold">This is inline</span>deleniti ea
        dolorem magni modi magnam veniam suscipit, vitae veritatis, possimus,
        sed enim{" "}
        <span className="inline-block font-bold">This is inline block</span>
        corporis quis. At, aliquid alias?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Praesentium perspiciatis incidunt ab ipsam
        necessitatibus quo, minima{" "}
        <span className="block font-bold">This is block</span>
        deleniti aut, fugiat ullam pariatur! Ipsa dolores{" "}
        <span className="hidden font-bold">This is hidden</span>esse ad
        dignissimos aspernatur necessitatibus perspiciatis excepturi.
      </div>

      {/* Z-index */}
      <div className="relative h-36">
        <div className="absolute left-10 w-24 h-24 bg-blue-300 z-40">1</div>
        <div className="absolute left-20 w-24 h-24 bg-blue-400">2</div>
        <div className="absolute left-40 w-24 h-24 bg-blue-500 z-10">3</div>
        <div className="absolute left-60 w-24 h-24 bg-blue-600 z-20">4</div>
        <div className="absolute left-80 w-24 h-24 bg-blue-700 z-30">5</div>
      </div>

      {/* Floats */}
      <div className="w-1/2">
        <img className="h-48 w-48 float-left m-4" src={imgLogo} alt="img1" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, iste
          porro eaque ullam corporis quod accusamus aspernatur sunt ut
          voluptatum! Nostrum est ipsam labore commodi qui, corporis dolor nisi
          magni?
        </p>
      </div>
    </>
  );
};

export default LayoutPosition;
