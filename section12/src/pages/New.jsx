import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import Editor from "../components/Editor.jsx";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App.jsx";

const New = () => {
  // nav(-1)은 뒤로가기 기능
  const nav = useNavigate();
  const {onCreate} = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    // 뒤로 가기 방지
    nav('/', {replace: true});
  }
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => {nav(-1)}}/>}/>
      <Editor onSubmit={onSubmit} />
    </div>
  )
}

export default New;