type Props = {
  children?: string | JSX.Element;
  onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
