import { FeatureCard } from "@/components/core";
import { PROJECT_DATA } from "@/data";
import { PrivateLayout } from "@/layouts";
import Link from "next/link";

const WorkPage = () => {
  return (
    <PrivateLayout>
      <div className="w-full custom-container flex flex-col py-4">
        <div className="w-full flex justify-end p-4 bg-gray-800 rounded-md shadow-lg">
          <Link href={"/admin/work/create"} className="btn-primary">
            Add Project
          </Link>
        </div>
        <div className="w-full flex flex-col items-center">
          {PROJECT_DATA.map((item) => (
            <FeatureCard key={item?.key} item={item} />
          ))}
        </div>
      </div>
    </PrivateLayout>
  );
};

export default WorkPage;
