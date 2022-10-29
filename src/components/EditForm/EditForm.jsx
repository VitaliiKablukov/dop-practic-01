import { RiSaveLine } from 'react-icons/ri';
import { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { nanoid } from 'nanoid';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useEffect } from 'react';

export const EditForm = ({
  currentTodo,
  editFormSubmit,
  cancelEditFormSubmit,
}) => {
  const [query, setQuery] = useState('');

  const onChangeForm = e => {
    setQuery(e.target.value);
  };
  const onSubmitForm = e => {
    e.preventDefault();
    editFormSubmit({ ...currentTodo, text: query });
  };
  return (
    <SearchFormStyled onSubmit={onSubmitForm}>
      <BtnEdit type="button" onClick={cancelEditFormSubmit}>
        <MdOutlineCancel size="16px" color="red" />
      </BtnEdit>

      <FormBtn type="submit">
        <RiSaveLine size="16px" color="green" />
      </FormBtn>

      <InputSearch
        onChange={onChangeForm}
        placeholder="EDIT TODO"
        name="edit"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
    </SearchFormStyled>
  );
};
