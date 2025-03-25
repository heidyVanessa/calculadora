import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleFunction = (func) => {
    try {
      setInput((prev) => String(func(parseFloat(prev))));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4 p-3 bg-gray-700 rounded text-right text-xl font-mono">
          {input || "0"}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {["sin", "cos", "tan", "log", "√"].map((func) => (
            <button
              key={func}
              className="p-4 bg-blue-600 rounded hover:bg-blue-500"
              onClick={() =>
                func === "√"
                  ? handleFunction(Math.sqrt)
                  : func === "log"
                  ? handleFunction(Math.log10)
                  : handleFunction(Math[func])
              }
            >
              {func}
            </button>
          ))}
          {[
            "7",
            "8",
            "9",
            "/",
            "^",
            "4",
            "5",
            "6",
            "*",
            "(",
            "1",
            "2",
            "3",
            "-",
            ")",
            "0",
            ".",
            "=",
            "+",
            "C",
          ].map((char) => (
            <button
              key={char}
              className={`p-4 rounded hover:bg-gray-500 ${
                char === "C" ? "bg-red-600 hover:bg-red-500" : "bg-gray-600"
              }`}
              onClick={() =>
                char === "="
                  ? handleCalculate()
                  : char === "C"
                  ? handleClear()
                  : setInput((prev) => prev + (char === "^" ? "**" : char))
              }
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
