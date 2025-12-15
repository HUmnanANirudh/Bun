const server = Bun.serve({
  port: 3000,
  fetch(res) {
    const body = `Hello, Bun! You requested: ${res.url}\n`;
    return new Response(body);
  },
});

console.log(`Server running at http://localhost:${server.port}/`);