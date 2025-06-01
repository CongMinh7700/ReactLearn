import { useEffect } from "react";

type Props = {
  count: number;
  setCount: (count: number) => void;
};

const CountPiza = ({ count, setCount }: Props) => {
  useEffect(() => {
    return () => {
      setCount(0);
    };
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
};

export default CountPiza;
