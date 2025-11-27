import './EmotionItem.css';
import { getEmotionImage } from '../utils/get-emoji-diary';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick} // ✅ 이게 있어야 클릭 가능
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ''
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};
export default EmotionItem;
