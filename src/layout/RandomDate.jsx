import { useEffect, useState } from 'react';

function RandomDateComponent() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    const today = new Date();

    const randomDate = getRandomDate(twoYearsAgo, today);
    setDate(formatDate(randomDate));
  }, []);
  function getRandomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
  function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yy = String(date.getFullYear()).substr(2);

    return `${dd}.${mm}.${yy}`;
  }

  return <div className="text-center font-thin text-sm">{date}</div>;
}

export default RandomDateComponent;
