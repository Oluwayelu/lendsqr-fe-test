import getSuspender from "./getSuspender";

function fetchData(url: RequestInfo | URL) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res);

  return getSuspender(promise);
}

export default fetchData;
