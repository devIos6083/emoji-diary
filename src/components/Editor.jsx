import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../utils/constants';
import { getStringedDate } from '../utils/get-stringed-date';

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });
  const nav = useNavigate();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_selection">
        <h4>오늘의 날씨</h4>
        <input
          type="date"
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: { name: 'emotionId', value: item.emotionId },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_selection">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          onChange={onChangeInput}
        ></textarea>
      </section>
      <section className="button_section">
        <Button text={'취소하기'} onClick={() => nav(-1)} />
        <Button
          text={'작성완료'}
          type={'POSITIVE'}
          onClick={onSubmitButtonClick}
        />
      </section>
    </div>
  );
};

export default Editor;
