import styled from "styled-components";

export const Main = styled.div`
  background: linear-gradient(to bottom, #ff073a 0%, #00022e 100%);
  width: 100%;
  height: 100vh;
  padding-top: 120px;
`;
export const Todo = styled.div`
  background: #fdfdfe;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  padding: 25px;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #00022e;
`;
export const Form = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin: 20px 0;
  align-items: center;
`;
export const InputTodo = styled.input.attrs(() => {
  return {
    placeholder: "Adicione seu novo todo",
  };
})`
  width: 85%;
  height: 100%;
  border: 1px solid #95a3a6;
  outline: none;
  font-size: 17px;
  border-radius: 3px;
  padding-left: 15px;
`;

export const BtnAdd = styled.button`
  width: 60px;
  height: 100%;
  background: #00022e;
  border: none;
  border-radius: 3px;
  font-size: 22px;
  color: #fdfdfe;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity:0.6
  pointer-events:none;
`;

export const TodoList = styled.div``;
export const TodoIten = styled.div`
  background-color: #f2f2f2;
  border-radius: 3px;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: 80fr 10fr 10fr;
`;
export const TodoName = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  
`;

export const DivBtns = styled.div``
export const BtnCheck = styled.div`
  display: flex;
  align-items: center;
  color: #f2f2f2;
  background: #10a674;
  justify-content: center;
  &:hover {
    filter: contrast(1.5);
    cursor: pointer;
  
  }
`;

export const BtnRemove = styled.div`
  display: flex;
  align-items: center;
  color: #f2f2f2;
  background: #ff073a;
  justify-content: center;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
  &:hover {
    filter: contrast(1.5);
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 80fr 20fr;
  margin-top: 20px;
  align-items:center;
`;

export const TextFooter = styled.div``;

export const BtnClear = styled.button`
  background: #00022e;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  color: #fdfdfe;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
`;
