import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          resp.json()
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    )
  }

  else if (isError) {
    return (
      <div>
        <h2>Error....</h2>
      </div>
    )
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}


export default MultipleReturn;