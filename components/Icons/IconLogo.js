export default function IconLogo({ color = "black", size = "8" }) {
  const classNameFinal = `w-${size} h-${size} text-${color}`;
  return (
    <svg
      className={classNameFinal}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      strokeWidth="3"
      viewBox="-54 0 512 512"
    >
      <path d="m218 0h-32c-102.5625 0-186 83.4375-186 186v140c0 102.5625 83.4375 186 186 186h32c102.5625 0 186-83.4375 186-186v-30c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v30c0 91.53125-74.46875 166-166 166h-32c-91.53125 0-166-74.46875-166-166v-140c0-91.53125 74.46875-166 166-166h32c91.53125 0 166 74.46875 166 166v30c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-30c0-102.5625-83.4375-186-186-186zm0 0" />
      <path d="m218 48h-32c-76.09375 0-138 61.90625-138 138v140c0 76.09375 61.90625 138 138 138h32c76.09375 0 138-61.90625 138-138v-140c0-76.09375-61.90625-138-138-138zm-32 396c-65.066406 0-118-52.933594-118-118v-140c0-65.066406 52.933594-118 118-118h32c64.398438 0 116.902344 51.855469 117.976562 116h-197.976562c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h164.90625c-16.085938 12.488281-28.078125 29.972656-33.632812 49.972656-13.371094-6.003906-28.921876-6.164062-42.75.132813-15.949219 7.265625-26.800782 21.773437-29.648438 38.394531-4.203125-.855469-8.496094-1.285156-12.855469-1.285156-35.507812 0-64.398437 28.886718-64.398437 64.398437 0 35.507813 28.890625 64.398438 64.398437 64.398438h105.210938c-19.808594 15.042969-44.492188 23.988281-71.230469 23.988281zm123.832031-43.988281h-125.8125c-24.480469 0-44.398437-19.917969-44.398437-44.398438s19.917968-44.398437 44.398437-44.398437c6.347657 0 12.492188 1.320312 18.261719 3.929687 3.273438 1.480469 7.097656 1.089844 10.003906-1.027343 2.910156-2.117188 4.457032-5.632813 4.050782-9.207032-1.554688-13.757812 5.871093-26.859375 18.476562-32.601562 11.648438-5.304688 25.285156-3.15625 34.742188 5.476562 2.789062 2.546875 6.769531 3.304688 10.296874 1.964844 3.527344-1.34375 6-4.554688 6.390626-8.308594 3.035156-29.011718 22.847656-53.515625 49.757812-63.097656v117.65625c0 28.003906-9.8125 53.753906-26.167969 74.011719zm0 0" />
      <path d="m98 184c-2.628906 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0" />
      <path d="m184.5 164h35c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-35c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0" />
      <path d="m394 246c-2.628906 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0" />
    </svg>
  );
}