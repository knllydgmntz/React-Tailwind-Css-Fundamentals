const ContainerSpacing = () => {
  return (
    <div className="container mx-auto">
      <article>
        <h3>Article One</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          accusamus dignissimos, architecto ducimus nemo, placeat alias quos
          suscipit autem exercitationem quas recusandae deleniti animi expedita
          pariatur fugiat, ipsa odit eos!
        </p>
      </article>

      {/* Margin */}
      <div className="bg-slate-100 m-2">Hello World</div>
      <div className="bg-slate-100 ml-4">Hello World</div>
      <div className="bg-slate-100 mr-4">Hello World</div>
      <div className="bg-slate-100 mt-4">Hello World</div>
      <div className="bg-slate-100 mb-4">Hello World</div>
      <div className="bg-slate-100 mt-[20px]">Hello World</div>

      {/* Padding */}
      <div className="bg-slate-100 p-2">Hello World</div>
      <div className="bg-slate-100 pl-4">Hello World</div>
      <div className="bg-slate-100 pr-4">Hello World</div>
      <div className="bg-slate-100 pt-4">Hello World</div>
      <div className="bg-slate-100 pb-4">Hello World</div>
      <div className="bg-slate-100 pt-[20px]">Hello World</div>

      {/* Space Between X */}
      <div className="flex mt-24 space-x-4">
        <div>Items 1</div>
        <div>Items 2</div>
        <div>Items 3</div>
        <div>Items 4</div>
        <div>Items 5</div>
        <div>Items 6</div>
        <div>Items 7</div>
      </div>

      {/* Space Between Y */}
      <div className="flex flex-col mt-24 space-y-4">
        <div>Items 1</div>
        <div>Items 2</div>
        <div>Items 3</div>
        <div>Items 4</div>
        <div>Items 5</div>
        <div>Items 6</div>
        <div>Items 7</div>
      </div>
    </div>
  );
};

export default ContainerSpacing;
