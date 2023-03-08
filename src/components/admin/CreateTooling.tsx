const CreateTooling = ({
  view,
  setView,
}: {
  view: boolean;
  setView: (arg: boolean) => void;
}) => {
  return (
    <div
      className={`fixed z-10 h-screen w-screen left-0 flex items-center justify-center bg-gray-700/20 ${
        view ? "flex" : "hidden"
      } transition-all ease-in-out duration-300  `}
    >
      <div
        className="w-full relative z-50 flex flex-col max-w-4xl bg-gray-800 shadow-xl backdrop-blur-sm rounded-xl border-[1px] "
        onBlur={() => setView(false)}
      >
        <h3 className="font-medium text-2xl tracking-wide text-theme p-4 border-b">
          Create Tooling
        </h3>

        <div className="flex flex-col p-4 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Enter title*"
            className="w-full focus:outline-theme focus:outline text-theme py-2 px-4 bg-transparent border-theme/20 focus-visible:outline-none border rounded-md "
          />

          <textarea
            name="svg"
            cols={20}
            rows={5}
            placeholder="Enter svg*"
            className="w-full focus:outline-theme focus:outline text-theme py-2 px-4 bg-transparent border-theme/20 focus-visible:outline-none border rounded-md"
          ></textarea>
        </div>
        <div className="flex items-center py-8 justify-center">
          <button className="btn-primary w-fit  flex mx-auto relative ">
            <div className="animate-ping border-theme border absolute top-0 left-0 h-full w-full rounded-md  "></div>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTooling;
