import { useEffect, useState } from 'react';
import api from '../services/api';

const MetaIntegration = ({ user }) => {
  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    // Подключение к Meta Business Suite [[8]]
    api.get('/api/meta-integration', { params: { userId: user.id } })
      .then(response => setMetaData(response.data))
      .catch(error => console.error(error));
  }, [user]);

  return (
    <div className="meta-integration">
      <h3>Данные из Meta:</h3>
      {metaData ? (
        <pre>{JSON.stringify(metaData, null, 2)}</pre>
      ) : (
        <p>Интеграция не настроена</p>
      )}
    </div>
  );
};

export default MetaIntegration;