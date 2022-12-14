import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ todo, numbertoDo, deleteTodo, editTodo }) => {
  const { text, id } = todo;
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        Todo #{numbertoDo}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => deleteTodo(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton type="button" onClick={() => editTodo(todo)}>
        <RiEdit2Line size={24} />
      </EditButton>
    </TodoWrapper>
  );
};
