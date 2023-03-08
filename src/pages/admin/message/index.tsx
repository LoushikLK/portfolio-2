import { SendReply } from "@/components/admin";
import { MessageCard } from "@/components/core";
import { PrivateLayout } from "@/layouts";
import { useState } from "react";

const message = [
  {
    sl: 1,
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    email: "johndoe@yarderp.com",
    name: "John Doe",
    subject: "Regarding School Fees",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis  dolores nemo velit sed ducimus. Exercitationem suscipit quas deleniti error corrupti quaerat, nam assumenda corporis perspiciatis eum laudantium beatae soluta fugit quos repellat. Non ex voluptatum quos nulla. Consequatur, provident non a error unde voluptatibus sit sapiente delectus, ipsa, facilis ipsam.",
  },
  {
    sl: 2,
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    email: "johndoe@yarderp.com",
    name: "John Doe",
    subject: "Regarding School Fees",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis  dolores nemo velit sed ducimus. Exercitationem suscipit quas deleniti error corrupti quaerat, nam assumenda corporis perspiciatis eum laudantium beatae soluta fugit quos repellat. Non ex voluptatum quos nulla. Consequatur, provident non a error unde voluptatibus sit sapiente delectus, ipsa, facilis ipsam.",
  },
  {
    sl: 3,
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    email: "johndoe@yarderp.com",
    name: "John Doe",
    subject: "Regarding Exam result",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis  dolores nemo velit sed ducimus. Exercitationem suscipit quas deleniti error corrupti quaerat, nam assumenda corporis perspiciatis eum laudantium beatae soluta fugit quos repellat. Non ex voluptatum quos nulla. Consequatur, provident non a error unde voluptatibus sit sapiente delectus, ipsa, facilis ipsam.",
  },
  {
    sl: 4,
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    email: "johndoe@yarderp.com",
    name: "John Doe",
    subject: "Regarding Exam result",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis  dolores nemo velit sed ducimus. Exercitationem suscipit quas deleniti error corrupti quaerat, nam assumenda corporis perspiciatis eum laudantium beatae soluta fugit quos repellat. Non ex voluptatum quos nulla. Consequatur, provident non a error unde voluptatibus sit sapiente delectus, ipsa, facilis ipsam.",
  },
];

const MessagePage = () => {
  const [sendReply, setSendReply] = useState(false);
  const [replyEmail, setReplyEmail] = useState("");
  return (
    <PrivateLayout>
      <>
        <SendReply view={sendReply} setView={setSendReply} email={replyEmail} />
        <div className="w-full custom-container flex flex-col gap-4 py-4">
          {message?.map((item) => (
            <MessageCard
              key={item?.sl}
              item={item}
              onReplyClick={(item: string) => {
                setSendReply(true);
                setReplyEmail(item);
              }}
            />
          ))}
        </div>
      </>
    </PrivateLayout>
  );
};

export default MessagePage;
