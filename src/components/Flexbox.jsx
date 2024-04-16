const Flexbox = () => {
  return (
    // Flex and
    <div>
      {/* <div className="flex items-center justify-between h-72 w-full bg-gray-100">
        <div className="p-10 border border-blue-300 bg-blue-100">01</div>
        <div className="p-10 border border-blue-300 bg-blue-100">02</div>
        <div className="p-10 border border-blue-300 bg-blue-100">03</div>
        <div className="p-10 border border-blue-300 bg-blue-100">04</div>
      </div> */}
      {/* Flex Column, Gap and Order */}
      {/* <div className="flex flex-col gap-4 items-center justify-between h-72 w-full bg-gray-100">
        <div className="order-3 p-10 border border-blue-300 bg-blue-100">
          01
        </div>
        <div className="order-2 p-10 border border-blue-300 bg-blue-100">
          02
        </div>
        <div className="order-4 p-10 border border-blue-300 bg-blue-100">
          03
        </div>
        <div className="order-1 p-10 border border-blue-300 bg-blue-100">
          04
        </div>
      </div> */}

      {/* Grow and Shrink */}

      <div className="flex w-full bg-gray-100">
        <div className="flex-initial w-64 p-10 border border-blue-300 bg-blue-100">
          01
        </div>
        <div className="flex-none w-64 p-10 border border-blue-300 bg-blue-100">
          02
        </div>
        <div className="flex-auto w-64 p-10 border border-blue-300 bg-blue-100">
          03
        </div>
        <div className="flex-1 w-64 p-10 border border-blue-300 bg-blue-100">
          04
        </div>
        <div className="p-10 border border-blue-300 bg-blue-100">05</div>
        <div className="p-10 border border-blue-300 bg-blue-100">06</div>
        <div className="p-10 border border-blue-300 bg-blue-100">07</div>
      </div>

      <div className="flex text-center">
        <div className="flex-1 bg-blue-100">Hello</div>
        <div className="flex-1 bg-blue-100">Hello</div>
        <div className="flex-1 bg-blue-100">Hello</div>
      </div>
    </div>
  );
};

export default Flexbox;
