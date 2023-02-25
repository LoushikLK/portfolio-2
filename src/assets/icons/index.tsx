import { SVGProps } from "react";

function Menu(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M1 3h14v3h-14zM1 7h14v3h-14zM1 11h14v3h-14z" />
    </svg>
  );
}

export { Menu };
