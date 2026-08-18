import http from 'http';
const server = http.createServer();
server.on('request', (req, res) => {
    res.write("<h1>Welcome to Server Side Programming</h1>");
    res.end();
});
server.listen(5001, () =>{
    console.log("Server is running on port 5001");
})