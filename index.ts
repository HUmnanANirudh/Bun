const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("Hello, Bun!");
    }
    if (url.pathname === "/about") {
      return new Response("This is the about page.");
    }
    if (url.pathname === "/contact") {
      return new Response("Contact us at contact@example.com");
    }
    if (url.pathname === "/json") {
      return Response.json({
        message: "This is a JSON response",
        status: "success",
      });
    }
    if (url.pathname === "/error") {
      throw new Error("This is a simulated error.");
    }
    if(url.pathname === "/file"){
        const message = await Bun.file("./text.txt").text()
        return Response.json ({
            message:message,
            success: true
    })};        
    return new Response("404 Not Found", { status: 404 });
  },
  error(err) {
    return new Response(`<pre> ${err.stack} </pre>`,{
        status: 500,
        headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Server running at http://localhost:${server.port}/`);
