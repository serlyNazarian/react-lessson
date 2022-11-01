import { useState, useEffect } from "react";
import React from "react";
import "./ToDo.css";

const ToDo = () => {
  const [toDos, setToDos] = useState([
    { id: 1, title: "Grel", completed: false },
    { id: 2, title: "Gartal", completed: false },
    { id: 3, title: "Udel", completed: false },
    { id: 4, title: "Ashxadel", completed: false },
  ]);
  const [title, setTitle] = useState({});
  const [isModal, setIsModal] = useState(false);
  const [id, setId] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((toDos) => setToDos(toDos));
  }, []);

  function changed(e) {
    setTitle({
      title,
      [e.target.id]: e.target.value,
    });
  }

  function add() {
    let toDo = { id: Date.now(), title: title.title, completed: false };
    setToDos([...toDos, toDo]);
  }

  function completedTodo(id) {
    let newTodos = [];
    // console.log(toDos);
    toDos.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      newTodos.push(item);
    });
    setToDos(newTodos);
  }
  function deleteToDo(id) {
    setId(id);
    setIsModal(true);
  }

  function finallyDelete() {
    setToDos(toDos.filter((x) => x.id !== id));
    setIsModal(false);
  }

  return (
    <div className="ToDos">
      <div className="add">
        <input type="text" id={"title"} onChange={changed} />
        <button onClick={add}>Add</button>
      </div>
      {toDos.map((item) => (
        <div
          className="ToDo"
          key={item.id}
          style={{ background: item.completed ? "green" : "red" }}
        >
          {item.title}
          <div>
            <button onClick={() => deleteToDo(item.id)}>Delete</button>
            <button onClick={() => completedTodo(item.id)}>Completed</button>
          </div>
        </div>
      ))}
      {isModal && (
        <div className="modal-delete">
          <button onClick={finallyDelete}>Yes</button>
          <button>No</button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
