import { useState } from 'react';
import api from '../services/api';

const PaymentForm = () => {
  const [amount, setAmount] = useState(1000);

  const handlePayment = async () => {
    try {
      const { data } = await api.post('/create-payment-intent', { amount });
      console.log('Client Secret:', data.clientSecret);
      // Здесь добавьте интеграцию Stripe Elements для оплаты
    } catch (error) {
      alert('Ошибка создания платежа');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Сумма в центах"
      />
      <button onClick={handlePayment}>Оплатить</button>
    </div>
  );
};

export default PaymentForm;