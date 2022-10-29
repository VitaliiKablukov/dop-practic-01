import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useEffect, useState } from 'react';

const parseDataFromLS = (key, initialValue = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? initialValue;
  } catch (error) {
    return initialValue;
  }
};
export const Todos = () => {
  const [todos, setTodos] = useState(() => parseDataFromLS('todos'));
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    setTodos(p => [{ ...todo, id: nanoid(6) }, ...p]);
  };

  const deleteTodo = id => {
    setTodos(p => p.filter(todo => todo.id !== id));
  };

  const editTodo = todoObj => {
    setIsEditing(true);
    setCurrentTodo(todoObj);
  };
  const editFormSubmit = obj => {
    setCurrentTodo({});
    setIsEditing(false);
    setTodos(p => p.map(todo => (todo.id === obj.id ? obj : todo)));
  };

  const cancelEditFormSubmit = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };
  return (
    <>
      {!isEditing ? (
        <SearchForm getTodo={addTodo} />
      ) : (
        <EditForm
          currentTodo={currentTodo}
          editFormSubmit={editFormSubmit}
          cancelEditFormSubmit={cancelEditFormSubmit}
        />
      )}
      {todos.length > 0 ? (
        <Grid>
          {todos.map((todo, index) => {
            return (
              <GridItem key={todo.id}>
                <Todo
                  todo={todo}
                  numbertoDo={index + 1}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              </GridItem>
            );
          })}
        </Grid>
      ) : (
        <p>There is no todo yet...</p>
      )}
    </>
  );
};
