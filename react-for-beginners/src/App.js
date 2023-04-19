import { useEffect, useState } from 'react';
const Option = ({ coins }) => {
  return coins.map(obj => (
    <option key={obj.id}>
      {obj.name}({obj.symbol}): ${obj.quotes.USD.price}
    </option>
  ));
};
function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(res => res.json())
      .then(data => data.slice(0, 10))
      .then(item => {
        setCoin(item);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>The Coins!{loading ? '' : ` (${coin.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          <Option coins={coin} />
        </select>
      )}
    </>
  );
}
export default App;
