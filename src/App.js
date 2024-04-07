import './App.css';

import {useSearchParams} from 'react-router-dom';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const removeQueryParams = () => {
    const param = searchParams.get('q');

    if (param) {
      // 👇️ Delete each query param
      searchParams.delete('q');

      // 👇️ Update state after
      setSearchParams(searchParams);
    }
  };

  const handleChange = event => {
    setSearchParams({q: event.target.value});
  };

  console.log(searchParams.get('q'));

  return (
    <div>
      <button onClick={removeQueryParams}>
        Remove query param
      </button>

      <input
        id="search"
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  );
}
