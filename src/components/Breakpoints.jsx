const Breakpoints = () => {
  function showBrowserWidth() {
    const width = window.innerWidth;

    document.querySelector("h1").innerText = `Width: ${width}px`;
  }

  window.onLoad = showBrowserWidth;
  window.onresize = showBrowserWidth;
  return (
    // Tailwind is mobile-first
    <div className="min-h-screen bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-red-800">
      <h1 className="text-white text-xl md:text-3xl xl:text-5xl"></h1>
      {/* <h1 className="text-primary"></h1> */}
    </div>
  );
};

export default Breakpoints;
