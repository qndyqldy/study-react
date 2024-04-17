import './Editor.css';
import EmotionItem from "./EmotionItem.jsx";
import Button from "./Button.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음'
  },
  {
    emotionId: 2,
    emotionName: '좋음'
  },
  {
    emotionId: 3,
    emotionName: '그럭저럭'
  },
  {
    emotionId: 4,
    emotionName: '나쁨'
  },
  {
    emotionId: 5,
    emotionName: '끔찍함'
  },
];
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if(month < 10) {
    month = `0${month}`;
  }
  if(date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
}
const Editor = ({onSubmit}) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: ''
  });

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if(name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value
    })
  }

  const onClick = (emotionId) => {
    setInput({
      ...input,
      emotionId
    })
  }

  const onClickSubmit = () => {
    onSubmit(input);
  }

  return (
    <div className={"Editor"}>
      <section className={"date_section"}>
        <h4>오늘의 날짜</h4>
        <input
          type={"date"}
          name={"createdDate"}
          value={getStringedDate(input.createdDate)}
          onChange={onChange}
          />
      </section>
      <section className={"emotion_section"}>
        <h4>오늘의 감정</h4>
        <div className={"emotion_list_wrapper"}>
          {
            emotionList.map((emotion) => (
              <EmotionItem
                onClick={() => onClick(emotion.emotionId)}
                key={emotion.emotionId}
                {...emotion}
                isSelected={emotion.emotionId === input.emotionId}/>
            ))
          }
        </div>
      </section>
      <section className={"content_section"}>
        <h4>오늘의 일기</h4>
        <textarea
          name={"content"}
          value={input.content}
          onChange={onChange}>
        </textarea>
      </section>
      <section className={"button_section"}>
        <Button
          text={"취소하기"}
          onClick={() => nav(-1)}/>
        <Button
          text={"작성완료"} type={"POSITIVE"}
          onClick={onClickSubmit}
        />
      </section>
    </div>
  )
}

export default Editor;