const Interactivity = () => {
  return (
    <>
      <button className="bg-black text-white py-3 px-5 rounded lg m-3 hover:bg-orange-500 hover:text-white">
        Submit
      </button>

      {/* Focus State Styling */}
      <button className="bg-black text-white py-3 px-5 rounded lg m-3 focus:bg-green-500 hover:text-white">
        Submit
      </button>

      {/* Active State Styling */}
      <button className="bg-black text-white py-3 px-5 rounded lg m-3 active:bg-yellow-500 hover:text-white">
        Submit
      </button>

      {/* Styling based on parent state */}
      <a
        href=""
        className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500"
      >
        <h3 className="group-hover:text-white">Card Title</h3>
        <p className="group-hover:text-white">This is the card text</p>
      </a>

      {/* Pseudo Classes */}
      <ul>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">
          Item 1
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">
          Item 2
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">
          Item 3
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">
          Item 4
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">
          Item 5
        </li>
        <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">
          Item 6
        </li>
      </ul>

      {/* Appearance */}

      <select className="appearance-none">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <br />

      {/* Cursor */}

      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-not-allowed">
        Submit
      </button>

      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-wait">
        Submit
      </button>

      {/* User Select */}

      <div className="select-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        exercitationem?
      </div>
      <div className="select-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        exercitationem?
      </div>
      <div className="select-all">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        exercitationem?
      </div>
      <div className="select-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        exercitationem?
      </div>
      <div className="select-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        exercitationem?
      </div>
      <a href="#item" className="block my-6">
        Go to item
      </a>

      {/* Smooth scroll example */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt minus
        inventore, quo officia quibusdam nam repudiandae sint ducimus? Rerum
        modi repellendus soluta a impedit doloribus expedita eveniet ex
        veritatis blanditiis accusamus libero, fuga tempora id repudiandae
        magnam, distinctio, delectus optio officia. Dolorem ex necessitatibus
        labore dolorum a ducimus iure ut in praesentium eligendi officia
        corporis, aliquid commodi. Dolorum voluptatibus facere repellat deleniti
        ullam impedit temporibus nam at, consequuntur doloremque laboriosam nisi
        eaque debitis officiis cupiditate totam sit aliquid? Ratione deleniti
        error, animi quaerat voluptatibus enim, consectetur voluptates porro
        voluptas modi fugit nisi consequuntur non provident ab aspernatur,
        nesciunt expedita qui tempore impedit fuga molestias earum eius ut?
        Repellendus delectus accusantium id consectetur corrupti cum, facilis
        itaque voluptatem expedita, soluta dolore eveniet! Error, cupiditate
        illo? Optio illo dicta incidunt delectus itaque eligendi soluta numquam
        ullam aliquid eaque, pariatur dolores? Culpa reiciendis possimus saepe
        amet corporis, ullam ipsum labore facilis, recusandae enim molestias
        rerum aspernatur! Impedit itaque natus at dolores delectus iste nemo
        amet reiciendis. Fugiat blanditiis deserunt magnam repudiandae quos ab
        provident amet, veniam iure labore minus exercitationem! Cumque, numquam
        consequuntur et quisquam praesentium, accusamus officia iure odit
        voluptate itaque enim. Nesciunt consequatur adipisci reprehenderit ad
        repudiandae, eveniet, suscipit hic explicabo aspernatur soluta, minima
        molestias natus debitis vero tempore ut. Et, ex magnam. Debitis unde
        fugiat ipsum et ratione possimus ab quis, alias cum, voluptas dolores
        perferendis fuga. Quibusdam, harum veritatis. Ratione, officia
        accusantium laudantium culpa, ad ipsum exercitationem magnam praesentium
        illo est voluptas eum temporibus nemo cupiditate labore? Quam error
        quasi esse, excepturi itaque labore quisquam reiciendis! Quia vitae est
        eveniet doloribus dolore architecto impedit unde distinctio cumque eius,
        temporibus illum, illo ad harum, vero quasi ratione incidunt error?
        Eius, eum at reiciendis accusamus, vel iure obcaecati porro, quo
        suscipit facilis voluptatibus nesciunt. Mollitia eveniet amet dolore
        magni impedit itaque molestias, possimus, recusandae exercitationem
        nesciunt aliquid adipisci reprehenderit dolor maxime voluptatem ipsam.
        Quae deserunt ea quibusdam reprehenderit, dolorem accusantium, explicabo
        voluptatem asperiores temporibus alias inventore corporis excepturi sint
        minus sunt aliquid pariatur nulla consequuntur eos modi doloribus
        numquam dolorum nobis? Repellat laboriosam omnis perferendis, deserunt
        itaque eos enim delectus quisquam cum labore. Assumenda, voluptatum
        voluptatibus distinctio, est, quo ipsam atque incidunt suscipit nihil
        labore quidem non inventore iusto sequi sapiente quam animi sed ratione
        quod repellat maiores eos quaerat earum quis? Optio adipisci earum
        consequuntur, saepe totam laudantium sed error quaerat accusantium,
        possimus harum blanditiis cum voluptatem beatae neque fugiat!
      </p>
      <div id="item">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ea incidunt
        qui atque ad cum quasi quis quidem quaerat saepe doloribus deleniti eum
        necessitatibus nisi, corporis nihil? Praesentium eligendi nihil autem
        vitae fuga nisi cupiditate error perferendis ea corporis porro facere
        nemo eaque ab sequi magni ad, nostrum qui architecto?
      </div>
    </>
  );
};

export default Interactivity;
