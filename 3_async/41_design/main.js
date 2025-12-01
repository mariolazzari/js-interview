// Design a utility which takes URL and a value for attempts which will attempt to make a fetch request.
// If on failure it tries again with increasing delay for number of times which user has requested

const refetch = async (url, maxRetries = 0, delay = 500) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    return await res.json();
  } catch (ex) {
    console.error(`Attempt failed: ${ex.message}`);

    // no retries left
    if (maxRetries === 0) {
      throw ex;
    }

    // wait before retry
    await new Promise(resolve => setTimeout(resolve, delay));

    // retry with increased delay
    return refetch(url, maxRetries - 1, delay * 2);
  }
};
