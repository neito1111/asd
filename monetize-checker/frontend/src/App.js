import { useState } from 'react';
import SEOForm from './components/SEOForm';
import Dashboard from './components/Dashboard';
import PaymentForm from './components/PaymentForm';
import YouTubeForm from './components/YouTubeForm';
import YoutubeDashboard from './components/YoutubeDashboard';

function App() {
  const [results, setResults] = useState(null);
  const [youtubeData, setYoutubeData] = useState(null);

  return (
    <div>
      <SEOForm onResult={setResults} />
      {results && <Dashboard data={results} />}
      <PaymentForm />
      <YouTubeForm onResult={setYoutubeData} />
      {youtubeData && <YoutubeDashboard data={youtubeData} />}
    </div>
    
  );
}

export default App;