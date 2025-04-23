import { useState } from 'react';
import SEOForm from './components/SEOForm';
import Dashboard from './components/Dashboard';
import PaymentForm from './components/PaymentForm';

function App() {
  const [results, setResults] = useState(null);

  return (
    <div>
      <SEOForm onResult={setResults} />
      {results && <Dashboard data={results} />}
      <PaymentForm />
    </div>
  );
}

export default App;