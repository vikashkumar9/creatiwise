import React, { useEffect, useState } from "react";

const Increase = () => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await result.json();
    setData(res);
  };
  useEffect(() => {
    getdata();
    deleteItem();
  }, []);

  const deleteItem = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const newData = data.filter((item) => item.id != id);
    setData(newData);
    return response;
  };

  return (
    <div className="px-10">
      {data.map((item) => (
        <div key={item.id}>
          {item.title}
          <button
            className="border px-2 py-1 rounded-2xl m-4 "
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Increase;
