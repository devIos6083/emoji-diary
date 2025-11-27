import { useContext, useMemo } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  const date = useContext(DiaryStateContext);
  const nav = useNavigate();

  // ✅ useMemo로 변경
  const curDiaryItem = useMemo(() => {
    // date가 없으면 null 반환
    if (!date) return null;

    const currentDiaryItem = date.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다');
      nav('/', { replace: true });
      return null;
    }

    return currentDiaryItem;
  }, [id, date, nav]);

  return curDiaryItem;
};

export default useDiary;
