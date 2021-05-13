import React from "react";
import "../../styles/styles.css";
const Presentation = (props) => {
  const { input, todos, setinput, settodos, Addtodo, DeleteTodo } = props;
  return (
    <div className="App">
      <form id="to-do-form">
        <input
          placeholder="enter todo"
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button type="submit" onClick={Addtodo}>
          add
        </button>
      </form>
      {todos.map((todo, index) => (
        <ul className="list" key={todo}>
          {todo}
          <span>
            <TiDelete
              className="TiDelete"
              key={index}
              onClick={() => DeleteTodo(index)}
            />
          </span>
        </ul>
      ))}
    </div>
  );
};

export default Presentation;
