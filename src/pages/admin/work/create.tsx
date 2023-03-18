import UploadImage from "@/components/core/UploadImage";
import { PrivateLayout } from "@/layouts";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const schema = [
  {
    key: "0",
    label: "Image",
    name: "image",
    initialValue: "",
    validationSchema: Yup.string(),
    type: "file",
  },
  {
    key: "1",
    label: "Project Title",
    name: "title",
    initialValue: "",
    validationSchema: Yup.string().required("Title is required"),
    type: "text",
  },
  {
    key: "4",
    label: "Github Link",
    name: "githubLink",
    initialValue: "",
    validationSchema: Yup.string(),
    type: "text",
  },
  {
    key: "5",
    label: "Website Link",
    name: "websiteLink",
    initialValue: "",
    validationSchema: Yup.string(),
    type: "text",
  },

  {
    key: "2",
    label: "Tooling",
    name: "tooling",
    initialValue: "",
    validationSchema: Yup.array(Yup.string()),
    type: "multi-select",
  },
  {
    key: "6",
    label: "Featured",
    name: "feature",
    initialValue: false,
    validationSchema: Yup.boolean(),
    type: "checkbox",
  },
  {
    key: "3",
    label: "Description",
    name: "description",
    initialValue: "",
    validationSchema: Yup.string().required("Description is required"),
    type: "textarea",
  },
];

const initialValues = schema?.reduce((accumulator, currentValue) => {
  accumulator[currentValue?.name] = currentValue.initialValue;
  return accumulator;
}, {} as any);

const validationSchema = schema?.reduce((accumulator, currentValue) => {
  accumulator[currentValue?.name] = currentValue.validationSchema;
  return accumulator;
}, {} as any);

const Create = () => {
  const [tooling, setTooling] = useState("");
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema),

    onSubmit: async (values) => {
      try {
        try {
          const formData = new FormData();

          formData.append("isFeatured", values?.feature);
          formData.append("title", values?.title);
          formData.append("description", values?.description);
          formData.append("githubLink", values?.githubLink);
          formData.append("websiteLink", values?.websiteLink);

          if (Array.isArray(values?.tooling)) {
            values?.tooling?.map((item: string) => {
              return formData.append("tooling", item);
            });
          } else {
            formData.append("tooling", values?.tooling);
          }

          const response = await fetch("/api/work", {
            method: "POST",
            // headers:{
            //   "Content-Type": "application/json"
            // },
            body: formData,
          });

          const data = await response.json();

          console.log(data);
        } catch (error: any) {
          alert(error?.message);
        }
      } catch (error) {}
    },
  });

  const handleAddTooling = () => {
    try {
      formik.setFieldValue(
        "tooling",
        formik?.values?.tooling?.length
          ? [...formik.values?.tooling, tooling]
          : [tooling]
      );
      setTooling("");
    } catch (error) {}
  };

  return (
    <PrivateLayout>
      <div className="custom-container py-4">
        <h3 className="font-medium tracking-wide text-xl py-4 w-full text-theme">
          Create New Project
        </h3>
        <form
          className="grid grid-cols-12 gap-4 "
          onSubmit={formik?.handleSubmit}
        >
          {schema?.map((item) =>
            item?.type === "file" ? (
              <div
                className="flex  flex-col w-full gap-2 col-span-12 "
                key={item?.key}
              >
                <UploadImage
                  onChange={(e: any) => {
                    formik?.setFieldTouched("image"),
                      formik?.setFieldValue("image", e.target.files[0]);
                  }}
                  outerClassName="bg-gray-800 rounded-xl"
                />
                {formik?.touched[item?.name] && formik?.errors[item?.name] && (
                  <small className="tracking-wide font-medium text-red-500">
                    {formik?.errors[item?.name] as string}
                  </small>
                )}
              </div>
            ) : item?.type === "textarea" ? (
              <div
                className="flex  flex-col w-full gap-2 col-span-12 "
                key={item?.key}
              >
                <textarea
                  rows={10}
                  name={item?.name}
                  placeholder={`Enter ${item?.label.toLowerCase()}*`}
                  onChange={formik?.handleChange}
                  value={formik?.values[item?.name]}
                  className="w-full focus:outline-theme focus:outline text-theme py-2 px-4 bg-transparent border-theme/20 focus-visible:outline-none border rounded-md"
                />
                {formik?.touched[item?.name] && formik?.errors[item?.name] && (
                  <small className="tracking-wide font-medium text-red-500">
                    {formik?.errors[item?.name] as string}
                  </small>
                )}
              </div>
            ) : item?.type === "multi-select" ? (
              <div
                className="flex  flex-col w-full gap-2 col-span-6 "
                key={item?.key}
              >
                <div className="flex flex-wrap gap-2 w-full items-center">
                  {formik?.values?.tooling &&
                    formik?.values?.tooling?.length > 0 &&
                    formik?.values?.tooling?.map((item: string) => (
                      <span
                        className="rounded-full text-white bg-theme/50 px-2 py-1 shadow-lg"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                </div>
                <div className="w-full relative flex">
                  <input
                    type="text"
                    placeholder={`Enter ${item?.label.toLowerCase()}*`}
                    onChange={(e: any) => {
                      setTooling(e?.target?.value);
                    }}
                    value={tooling}
                    className="w-full focus:outline-theme focus:outline text-theme py-2 px-4 bg-transparent border-theme/20 focus-visible:outline-none border rounded-md"
                  />
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={handleAddTooling}
                  >
                    Add
                  </button>
                </div>
                {formik?.touched[item?.name] && formik?.errors[item?.name] && (
                  <small className="tracking-wide font-medium text-red-500">
                    {formik?.errors[item?.name] as string}
                  </small>
                )}
              </div>
            ) : item?.type === "checkbox" ? (
              <div
                className="flex  flex-col w-full gap-2 col-span-6 "
                key={item?.key}
              >
                <div className="flex items-center w-full justify-between">
                  <h3 className="font-medium tracking-wide text-base ml-2">
                    {item?.label}
                  </h3>

                  <input
                    type="checkbox"
                    name={item?.name}
                    checked={formik?.values[item?.name]}
                    onChange={(e) => {
                      formik?.setFieldValue(item?.name, e?.target?.checked);
                    }}
                    className=" h-6 w-6"
                  />
                </div>
                {formik?.touched[item?.name] && formik?.errors[item?.name] && (
                  <small className="tracking-wide font-medium text-red-500">
                    {formik?.errors[item?.name] as string}
                  </small>
                )}
              </div>
            ) : (
              <div
                className="flex  flex-col w-full gap-2 col-span-6 "
                key={item?.key}
              >
                <input
                  type="text"
                  name={item?.name}
                  placeholder={`Enter ${item?.label.toLowerCase()}*`}
                  onChange={formik?.handleChange}
                  value={formik?.values[item?.name]}
                  className="w-full focus:outline-theme focus:outline text-theme py-2 px-4 bg-transparent border-theme/20 focus-visible:outline-none border rounded-md"
                />
                {formik?.touched[item?.name] && formik?.errors[item?.name] && (
                  <small className="tracking-wide font-medium text-red-500">
                    {formik?.errors[item?.name] as string}
                  </small>
                )}
              </div>
            )
          )}
          <div className="w-full flex items-center justify-center ml-2">
            <button type="submit" className="btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </PrivateLayout>
  );
};

export default Create;
