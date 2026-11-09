function TodoForm({ text, setText, onAdd,isEditing }: any) {
  return (
    <div className="todoForm">
      <input
        className="todoInput"
        value={text}

        onChange={(e: any) => setText(e.target.value)}
        placeholder="Новая задача"
      />
      <button className="todoBtn" onClick={onAdd}>
        {isEditing ? "Сохранить" : "Добавить"}
      </button>
    </div>
  );
}

export default TodoForm;