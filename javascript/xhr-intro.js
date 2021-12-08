

let xhr = new XMLHttpRequest()

// 1. create a request 
// 2. send the request 
xhr.open("post","https://jsonplaceholder.typicode.com/posts")
xhr.send([{}, {}])
