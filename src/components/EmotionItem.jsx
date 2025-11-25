import './EmotionItem.css';
import { getEmotionImage } from '../utils/get-emoji-diary';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick}) => {
    <div onClick = {onClick} className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}>
        <img src={getEmotionImage(emotionId)} alt="" className="emotion_img" />
        <div className="emotion_name">{emotionName}</div>
    </div>

};

export default EmotionItem;
