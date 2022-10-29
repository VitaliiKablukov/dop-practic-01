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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    setTodos(p => [{ ...todo, id: nanoid(6) }, ...p]);
  };

  const deleteTodo = id => {
    setTodos(p => p.filter(todo => todo.id !== id));
  };

  return (
    <>
      <SearchForm getTodo={addTodo} />
      {todos.length > 0 ? (
        <Grid>
          {todos.map((todo, index) => {
            return (
              <GridItem key={todo.id}>
                <Todo
                  todo={todo}
                  numbertoDo={index + 1}
                  deleteTodo={deleteTodo}
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
