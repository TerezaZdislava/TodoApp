import React from 'react';
import styled from 'styled-components';
import EdiText from 'react-editext';
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill';

const MyCheckCircle = styled(CheckCircleFill)`
  color: grey;
  width: 25px;
  cursor: pointer;
  flex-shrink: 0;
  :hover {
    color: lightseagreen;
    width: 27px;
  }
`;

const Todo = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: moccasin;
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  box-sizing: border-box;
  overflow-wrap: anywhere;
  box-shadow: 7px 10px 17px -7px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: 7px 10px 17px -7px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 7px 10px 17px -7px rgba(0, 0, 0, 0.45);
`;

const StyledEdiText = styled(EdiText)`
  box-sizing: border-box;
`;

const Todos = (props) => {
  return props.tasks.map((task) => (
    <Todo key={task.id}>
      <StyledEdiText
        showButtonsOnHover
        validationMessage="Please type at least 2 characters."
        validation={(val) => val.length >= 2}
        type="text"
        value={task.name}
        onSave={(event) => props.onSave(event, task.id)}
      ></StyledEdiText>
      <MyCheckCircle onClick={() => props.deleted(task.id)} />
    </Todo>
  ));
};

export default Todos;
