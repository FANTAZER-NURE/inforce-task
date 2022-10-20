export function getComments(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json());
}
