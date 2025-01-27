import { SVGProps } from "./types";

export const PlusIcon = (props: SVGProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1_34579"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="13"
        height="13"
      >
        <path
          d="M11.3215 7.38058H7.17868V11.5234H5.46439V7.38058H1.32153V5.66629H5.46439V1.52344H7.17868V5.66629H11.3215V7.38058Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1_34579)">
        <rect
          x="0.321533"
          y="0.523438"
          width="12"
          height="12"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
