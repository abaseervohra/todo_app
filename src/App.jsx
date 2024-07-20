import React, { useState } from "react";
import './index.css'; // This should import Tailwind styles if your index.css imports tailwind.css

const App = () => {
  const [text, setText] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { text }]);
    setText("");
  };

  const deleteHandler = (index) => {
    const updatedTasks = mainTask.filter((task, i) => i !== index);
    setMainTask(updatedTasks);
  };

  let renderTask = <h2 className="text-center text-gray-500">NO TASK AVAILABLE</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((e, i) => (
      <div key={i} className="bg-white shadow-md rounded-lg p-4 my-2 flex justify-between items-center">
        <h6 className="text-lg font-semibold text-gray-800">{e.text}</h6>
        <button
          onClick={() => deleteHandler(i)}
          className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
        >
          DELETE
        </button>
      </div>
    ));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">TODO LIST</h2>
        <form onSubmit={submitHandler} className="mb-4">
          <input
            type="text"
            placeholder="Enter the title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            ADD TASK
          </button>
        </form>
        <div>
          <ul>
            {renderTask}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
