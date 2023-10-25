import "./Box.css";
import "./Box.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
}

function Box({ children, id }: Props) {
  return <article id={id}>{children}</article>;
}

export default Box;
