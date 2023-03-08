type Props = {
  title: string;
  content?: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  contain?: string;
  contentClassName?: string;
  icon: React.ReactElement;
};

export default function Card({
  title,
  icon,
  content,
  className = "",
  iconClassName = "",
  titleClassName = "",
  contentClassName = "",
}: Props) {
  return (
    <>
      <div
        className={` group hover:bg-theme flex cursor-pointer border-b-4 border-theme  flex-row dashboard-card-shadow items-center gap-4 rounded-[1.5rem] p-6 transition duration-150 ease-in-out ${className} `}
      >
        <div className={`rounded-xl  ${iconClassName} p-1`}>
          <div className="h-full w-[20%] text-sm p-2 group-hover:text-white ">
            {icon}
          </div>
        </div>
        <div className="flex gap-1 h-full w-2/3 flex-col pt-1">
          <h4
            className={`group-hover:text-white text-xl font-semibold ${contentClassName}`}
          >
            {content}
          </h4>

          <h1
            className={`group-hover:text-white text-xl font-semibold ${titleClassName}`}
          >
            {title}
          </h1>
        </div>
      </div>
    </>
  );
}
