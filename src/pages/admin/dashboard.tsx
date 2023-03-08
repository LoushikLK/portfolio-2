import { Message, People } from "@/assets/icons";
import { Card } from "@/components/core";
import { PrivateLayout } from "@/layouts";

const Dashboard = () => {
  return (
    <PrivateLayout>
      <div className="w-full custom-container py-4">
        <div className="grid grid-cols-12 gap-4">
          <span className="w-full col-span-4">
            <Card
              title={"Total Page Visit"}
              icon={<People className="text-4xl" />}
              content={"500"}
              className="bg-gray-800"
            />
          </span>
          <span className="w-full col-span-4">
            <Card
              title={"Total Messages"}
              icon={<Message className="text-4xl" />}
              content={"50"}
              className="bg-gray-800"
            />
          </span>
          <span className="w-full col-span-4">
            <Card
              title={"Total Page Visit"}
              icon={<People className="text-4xl" />}
              content={"500"}
              className="bg-gray-800"
            />
          </span>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Dashboard;
