import { Message, SendReply } from "@/assets/icons";

const MessageCard = ({ item, onReplyClick }: any) => {
  return (
    <div className="w-full bg-gray-800 shadow-xl rounded-lg p-4 ">
      <div className="flex items-center gap-4">
        <Message className="text-4xl" />
        <div className="flex flex-col gap-1 ">
          <h3 className="font-semibold text-theme tracking-wide text-xl">
            {item?.subject}
          </h3>

          <h3 className="font-medium tracking-wide text-sm text-gray-500">
            Send on 12/05/2023 12:00 PM
          </h3>
        </div>
      </div>
      <p className="tracking-wide p-4 text-gray-100 font-medium">
        {item?.message}
      </p>
      <div
        className="flex items-center"
        onClick={() => onReplyClick(item?.email)}
      >
        <span className=" cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md flex items-center gap-2 text-blue-500 pr-4 ">
          <SendReply />
          <h3 className="font-medium tracking-wide text-base">Reply</h3>
        </span>
      </div>
    </div>
  );
};

export default MessageCard;
