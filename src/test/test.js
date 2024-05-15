const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const body = JSON.stringify({
  limit: 947,
  offset: 0,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body,
};

fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    const fetchData = result.jdList;
    // const unq = [...new Set(fetchData.map(({ jdUid }) => jdUid))];

    // console.log(unq.length, fetchData.length);
    console.log(Object.keys(fetchData[0]));
  })
  .catch((error) => console.error(error));
