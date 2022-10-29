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
  const addTodo = todo => {
    setTodos(p => [{ ...todo, id: nanoid(6) }, ...p]);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <SearchForm getTodo={addTodo} />
      {todos.length > 0 ? (
        <Grid>
          {todos.map(({ id, text }) => {
            return (
              <GridItem key={id}>
                <Todo text={text} />
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
