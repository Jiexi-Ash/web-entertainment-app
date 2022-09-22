import { useState, useEffect } from "react";
import MainLayout from "components/UI/MainLayout";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
      <button onClick={handleClicked}>click me</button>
    </MainLayout>
  );
}
