/**
 * API client example.
 */
import { request } from 'http';
import { Socket } from 'net';
import { createServer, IncomingMessage, ServerResponse } from 'http';


const host = 'localhost';
const port = 1337;

const server = createServer((sent: IncomingMessage, res: ServerResponse) => {
  const body = <Buffer[]>[];

  sent.on('data', (data: Buffer) => body.push(data));
  sent.on('error', (err) => { console.error(err); });
  sent.on('end', () => {
    const message = Buffer.concat(body).toString();

    console.log(message);
  });

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('pong');
});

server.listen(8080, 'localhost', () => { console.log('Server running at https://localhost:8080/'); });

