interface ChildProps {
  color: string;
  onClick: () => void; // no usable return Value from onClick that's why Void
  children?: React.ReactNode;
}

//export const Child = (props: ChildProps) => {
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// better Example (unlike the 1st example, this one also expects to receive a children Prop)
export const ChildTwo: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
//with the better Example I can get access and use all React's addition Properties such as:
//ChildTwo.displayName;
