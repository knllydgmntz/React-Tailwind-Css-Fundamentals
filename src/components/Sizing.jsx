const Sizing = () => {
  return (
    <>
      <div className="bg-black text-white w-4">Hello</div>
      <div className="bg-black text-white w-48">Hello</div>
      <div className="bg-black text-white w-96">Hello</div>

      {/* Percentages */}
      <div className="bg-green-700 text-white w-1/4">Hello</div>
      <div className="bg-green-700 text-white w-1/3">Hello</div>
      <div className="bg-green-700 text-white w-1/2">Hello</div>

      {/* Width of the viewport */}
      <div className="bg-blue-500 text-white w-screen">Hello</div>
      {/* 100% of container */}
      <div className="bg-blue-300 text-white w-full">Hello</div>
      {/* Arbitrary width */}
      <div className="bg-blue-700 text-white w-[300px]">Hello</div>
      {/* Max Width */}
      <div className="bg-gray-300 max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus fuga
        quod rem corporis est et veniam incidunt perspiciatis nulla hic ducimus
        labore nisi, nobis, consequatur voluptate. Dolorem et recusandae a.
      </div>

      {/* Height (most of the same options as widths) */}
      <div className="flex items-end">
        <div className="bg-orange-500 w-20 h-24">Hello</div>
        <div className="bg-orange-500 w-20 h-32">Hello</div>
        <div className="bg-orange-500 w-20 h-40">Hello</div>
        <div className="bg-orange-500 w-20 h-48">Hello</div>
        <div className="bg-orange-500 w-20 h-64">Hello</div>
        <div className="bg-orange-500 w-20 h-96">Hello</div>
      </div>
      {/* Full screen height */}
      <div className="bg-blue-300 text-white h-screen">Hello</div>
    </>
  );
};

export default Sizing;
