import { useState, useEffect } from 'react';
import HomePage from '../layouts/pages';

import { API } from '../configs';
import { getFilteredPeopleApi } from '../data/people';

export default function Home() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await API.methodGet();
      const { data } = response.data;
      setPeoples(data);
    })();
  }, []);

  // function filter
  const filterPeople = (e) => {
    const inputData = e.target.value;

    // filter data
    const filteredData = getFilteredPeopleApi(inputData, peoples);

    if (inputData.length == 0 || filteredData == 'not found') {
      (async function () {
        const response = await API.methodGet();
        const { data } = response.data;
        setPeoples(data);
      })();
    }

    // change state
    setPeoples(filteredData);
  };

  return (
    <>{peoples && <HomePage peoples={peoples} funcFilter={filterPeople} />}</>
  );
}
