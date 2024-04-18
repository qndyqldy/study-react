import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hooks/useDiary.jsx";
import {getStringedDate} from "../util/getStringedDate.js";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const curDiaryItem = useDiary(params.id);

  if(!curDiaryItem) {
    return <div>데이터 로딩중 ...!</div>
  }

  const {createdDate, emotionId, content} = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 일기`}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => {nav(-1)}}/>}
        rightChild={<Button text={"수정하기"} onClick={()=> nav(`/edit/${params.id}`)} />}
      />

      <Viewer emotionId={emotionId} content={content} />
    </div>
  )
}

export default Diary;