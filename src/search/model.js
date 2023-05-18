const searchResultData = {};

async function fetchData(keyword) {
  return new Promise((resolve) => {
    console.log("Request sent:", keyword);
    setTimeout(() => {
      resolve({ keyword, result: `${keyword}:${Date.now()}` });
    }, Math.random() * 2000);
  });
}
async function getResult(keyword) {
  if (!keyword) return { keyword, result: "" };
  if (!searchResultData[keyword]) {
    searchResultData[keyword] = await fetchData(keyword);
  }
  // console.log("searchResultData", searchResultData);
  return searchResultData[keyword];
}

export { getResult };
