export function getPosts(post) {
  return new Promise((resolve) => {
    resolve([post]);
  });
}

export function setPost(post) {
  return fetch("http://localhost:3333/post", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({post})
})
    .then(data => data.json());
}
