import { getEmotionImage } from '../utils/get-emoji-diary';
import Button from './Button';
import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const goDiaryPage = () => nav(`/diary/${id}`);

  const goEditPage = () => nav(`/edit/${id}`);

  return (
    <div className="DiaryItem">
      <div
        className={`img_selection img_selection_${emotionId}`}
        onClick={goDiaryPage}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section" onClick={goDiaryPage}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
        <div className="button_selection">
          {<Button text={'수정하기'} onClick={goEditPage} />}
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
