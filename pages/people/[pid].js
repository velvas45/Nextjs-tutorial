import React from 'react';
// import { useRouter } from 'next/router';
import { API } from '../../configs';

import SingleUser from '../../components/single-user';

function PeoplePage({ people }) {
  //   const router = useRouter();
  //   const { pid } = router.query;

  return <SingleUser people={people} />;
}

// This gets called on every request
export async function getServerSideProps({ params: { pid } }) {
  // Fetch data from external API
  try {
    const response = await API.methodSingleGet(pid);

    // if (response.status == '404') {
    //   throw new Error('error');
    // }

    const { data } = response.data;
    // Pass data to the page via props
    return { props: { people: data } };
  } catch (err) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
}

export default PeoplePage;
