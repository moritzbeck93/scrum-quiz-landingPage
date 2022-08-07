import { SassColor } from "sass";

interface Props {
  title: string;
  fontSize?: string;
}

const H2: React.FC<Props> = ({ title, fontSize }) => {
  return <h2 style={{ color: "#03b6e3", fontFamily: "Gilroy", fontSize: fontSize }}>{title}</h2>;
};

export default H2;
