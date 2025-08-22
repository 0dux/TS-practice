import { useState, useEffect } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleIsOnline = () => {
      console.log("User is online");
      setIsOnline(true);
    };
    const handleIsOffline = () => {
      console.log("User is offline");
      setIsOnline(false);
    };

    window.addEventListener("online", handleIsOnline);
    window.addEventListener("offline", handleIsOffline);

    return () => {
      window.removeEventListener("online", handleIsOnline);
      window.removeEventListener("offline", handleIsOffline);
    };
  }, []);
  return isOnline;
}

function useMousePointer() {
  const [corrdinates, setCorrdinates] = useState({ x: null, y: null });
  useEffect(() => {
    const handleMouseMovement = (e) =>
      setCorrdinates({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);
  return corrdinates;
}

function useInterval(fn, interval) {
  useEffect(() => {
    const timer = setInterval(() => {
      fn();
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, [interval]);
}

function useDebounce(inputValue, delay) {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, inputValue]);
  return debouncedValue;
}

const App = () => {
  // Hook to check if the user is online
  // const isOnline = useIsOnline();
  // return <div>{isOnline ? "User is online!!!" : "User is offline"}</div>;

  // Track user's mouse movement.
  // const coor = useMousePointer();
  // return (
  //   <>
  //     The corrdinates of the mouse pointer are x:{coor.x} & y:{coor.y}
  //   </>
  // );

  // counter using useInterval hook
  // const [count, setCount] = useState(0);
  // useInterval(() => {
  //   setCount((c) => c + 1);
  // }, 1000);
  // return <>Timer is at {count}</>;

  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      <div>The is the debouncedValue {debouncedValue}</div>
    </>
  );
};

export default App;
