import { useState } from 'react';
import api from '../services/api';

const SEOForm = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/analyze', { url });
      setResults(data);
    } catch (error) {
      alert('Ошибка проверки. Убедитесь, что URL доступен [[2]]');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="seo-form">
      <input 
        type="url" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Введите URL для анализа" 
        required 
      />
      <button type="submit">Анализировать</button>
    </form>
  );
};

export default SEOForm;