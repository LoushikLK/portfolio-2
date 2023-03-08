import { Delete, Edit } from "@/assets/icons";

const ToolingCard = ({ item }: { item: any }) => {
  return (
    <div
      className="flex items-center gap-4 bg-gray-800 p-2 lg:px-4 lg:py-3 relative group rounded-lg min-w-[10rem] overflow-hidden"
      key={item?.title}
    >
      <div className="flex items-center  ">{item?.icon}</div>
      <h3 className="font-medium tracking-wide text-lg text-theme/50">
        {item?.title}
      </h3>
      <div className="absolute top-0 left-0 flex h-full w-full  translate-x-full group-hover:translate-x-0 transition-all ease-in-out duration-300 ">
        <button className="flex items-center gap-4 w-full h-full bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 rounded-l-lg px-2">
          <Edit />
          <small className="tracking-wide font-medium">Edit</small>
        </button>
        <button className="flex w-full items-center gap-4 h-full bg-red-500 transition-all ease-in-out duration-300 hover:bg-red-600 rounded-r-lg px-2">
          <Delete />
          <small className="tracking-wide font-medium">Delete</small>
        </button>
      </div>
    </div>
  );
};

export default ToolingCard;
