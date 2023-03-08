import { UPLOAD } from "@/assets/animation";

import { useRef } from "react";
import Lottie from "react-lottie";
type Props = {
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | any;
  height?: number;
  width?: number;
  url?: string;
  className?: string;
  uploadText?: string;
  accept?: string;
  outerClassName?: string;
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: UPLOAD,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const UploadImage = ({
  onChange,
  url,
  height = 180,
  width = 180,
  className = "focus-object",
  uploadText = "Drag and Drop or Click to Upload",
  accept,
  outerClassName = "w-full",
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: any) => {
    try {
      e.preventDefault();
      e.stopPropagation();

      if (e?.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        onChange({
          target: {
            files: e?.dataTransfer?.files,
          },
        });
        e.dataTransfer.clearData();
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={outerClassName}>
        <div
          className="w-full relative z-50 "
          onDrop={handleDrop}
          onDragEnter={handleDrop}
          onDragOver={handleDrop}
          onDragLeave={handleDrop}
        >
          {" "}
          <div
            className={className}
            onClick={() => (onChange ? inputRef.current?.click() : {})}
            style={{
              width: "100%",
              height: height,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <Lottie
                options={defaultOptions}
                height={height - 50}
                width={width}
              />
              <small className="text-center font-medium tracking-wide">
                {uploadText}
              </small>
            </div>
          </div>
        </div>
        <input
          ref={inputRef}
          hidden
          type="file"
          accept={accept}
          onChange={onChange}
          onDrop={handleDrop}
          className="w-full"
        />
      </div>
    </>
  );
};

export default UploadImage;
