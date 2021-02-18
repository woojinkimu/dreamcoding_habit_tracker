import React, {memo} from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = '';
    // form 초기화
    formRef.current.reset();
  }

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} className="add-input" type="text" placeholder="Habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;