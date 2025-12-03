// Write a function to Replace parameters in url

const initialUrl = "/posts/:postId/comments/:commentId";

const replaceParamsInUrl = (url, params) => {
  params.forEach(p => {
    const from = p["from"];
    const to = p["to"];

    url = url.replace(`:${from}`, to);
  });

  return url;
};

const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);
console.log(resultUrl);

url = url.replace(new RegExp(`:${from}`, "g"), to);
