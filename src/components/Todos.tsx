import React, { useRef } from "react";

interface todosProps {
  onTodoHandler: (text: string) => void;
}

const Todos: React.FC<todosProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = textInputRef.current!.value;
    props.onTodoHandler(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="todoinput">
          Todo Text
          <input
            className="input-field"
            type="text"
            name="todoinput"
            ref={textInputRef}
          />
        </label>
      </div>
      <input className="btn-submit" type="submit" value="Add Todo" />
    </form>
  );
};

export default Todos;
