interface ChildProps {
  color: string;
  onclick: () => void;
}

// Method 1
export const Child = ({ color, onclick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onclick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onclick }) => {
  return (
    <div>
      {color}
      <button onClick={onclick}>Click me</button>
    </div>
  );
};
