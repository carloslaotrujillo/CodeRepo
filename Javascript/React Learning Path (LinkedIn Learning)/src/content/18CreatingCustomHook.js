import React from 'react';
import useFetch from './helpers/18useFetch';

const GITHUB_USER = 'https://api.github.com/users/carlostrujillo90';

function CreatingCustomHook() {

  const [loading, data, error] = useFetch(GITHUB_USER);

  return (
    <div>
        {loading ? `Loading...` : `Custom fetch from github: ${data.login}`}
        {error && `Error: ${data.message}`}
    </div>
  )
}

export default CreatingCustomHook