export default function ProfilePicture(props) {
  return (
    <svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 0C8.96 0 0 8.96 0 20s8.96 20 20 20 20-8.96 20-20S31.04 0 20 0Zm0 6c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6Zm0 28.4c-5 0-9.42-2.56-12-6.44.06-3.98 8-6.16 12-6.16 3.98 0 11.94 2.18 12 6.16-2.58 3.88-7 6.44-12 6.44Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
