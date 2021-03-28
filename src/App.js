import { useState } from "react";
//import { SiAddthis } from "react-icons/si";
import { FaPlus, FaCheck, FaTrash } from "react-icons/fa";
//import { AiOutlineClear } from "react-icons/ai";
import {
  Main,
  Todo,
  Title,
  Form,
  InputTodo,
  BtnAdd,
  TodoList,
  TodoIten,
  TodoName,
  DivBtns,
  BtnCheck,
  BtnRemove,
  Footer,
  TextFooter,
  BtnClear,
} from "./style";

function App() {
  const [text, setNewText] = useState("");
  const [list, setNewList] = useState([]);
  const [contagem, setContagem] = useState(0);

  const onChangeText = (e) => {
    setNewText(e.target.value);
  };

  const onHandleClickAddTodo = () => {
    if (text.trim() === "") {
      console.log("Preencha o campo");
    } else {
      const todo = { text, showing: false };
      setNewList([...list.concat(todo)]);
      setContagem((number) => number + 1);
      setNewText("");
      console.log("Todo criado");
    }
  };

  const onHandleEnter = (e) => {
    if (e.key === "Enter") {
      onHandleClickAddTodo();
    }
  };

  const onHandleClickRow = (index) => {
    const newList = list;
    newList[index].showing = true;
    setNewList([...newList]);
  };

  const onHandleClickCheckTodo = (e, index) => {
    let newList = list;
    newList.splice(index, 1);
    setContagem((number) => number + 1);


  };

  const onHandleClickRemoveTodo = (e, index) => {
    e.stopPropagation();
    let newList = list;
    newList.splice(index, 1);
    setNewList([...newList]);
    setContagem((number) => number - 1);
    console.log("Todo removido!");
  };

  const onHandleClickClearAllTodo = (e) => {
    let newList = list;
    newList.splice();
    setNewList([]);
    setContagem(0);
    setNewText("");
    console.log("Todos itens removidos");
  };

  return (
    <Main>
      <Todo>
        <div>
          <Title>Todo App</Title>
          <Form>
            <InputTodo
              onChange={onChangeText}
              onKeyPress={onHandleEnter}
              value={text}
            ></InputTodo>
            <BtnAdd onClick={(e) => onHandleClickAddTodo(e)}>
              <FaPlus />
            </BtnAdd>
          </Form>
        </div>
        <TodoList>
          <div>
            {list.map((el, index) => (
              <TodoIten onClick={() => onHandleClickRow(index)}>
                <TodoName>{el}</TodoName>
                <DivBtns>
                  {el.showing === true ? (
                    <>
                      <BtnCheck onClick={(e) => onHandleClickCheckTodo(e, index)}>
                        <FaCheck />
                      </BtnCheck>

                      <BtnRemove
                        onClick={(e) => onHandleClickRemoveTodo(e, index)}
                      >
                        <FaTrash />
                      </BtnRemove>
                    </>
                  ) : null}
                </DivBtns>
              </TodoIten>
            ))}
          </div>
        </TodoList>
        <Footer>
          <TextFooter>
            Atividades ha completar: {contagem} <br></br>
          </TextFooter>
          <BtnClear onClick={(e) => onHandleClickClearAllTodo(e)}>
            Limpar
          </BtnClear>
        </Footer>
      </Todo>
    </Main>
  );
}

export default App;
