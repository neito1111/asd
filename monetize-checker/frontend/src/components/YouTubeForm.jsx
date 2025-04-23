import { useState } from 'react';
import api from '../services/api';

const YouTubeForm = ({ onResult }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/youtube-stats', { url });
      onResult(data);
    } catch (error) {
      alert('Ошибка получения данных. Проверьте URL.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Введите URL YouTube видео"
        required
      />
      <button type="submit">Получить статистику</button>
    </form>
  );
};

export default YouTubeForm;