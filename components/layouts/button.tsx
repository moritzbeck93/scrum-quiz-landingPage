interface Props {
  color: string;
  fontSize?: string;
  marginLeft?: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}

const Button: React.FC<Props> = ({color, fontSize, marginLeft, children, height, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'Gilroy',
        fontWeight: '600',
        fontSize: fontSize,
        marginLeft: marginLeft,
        backgroundColor: color,
        borderColor: '#f1b603',
        borderRadius: '35px',
        borderStyle: 'solid',
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
