import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const port: number = 1244;

function getContType(type: string) {
  return { "Content-type": `text/${type}` };
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const indexPath = path.join(__dirname, '..', 'src', 'index.html');
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, getContType('plain'));
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, getContType('html'));
        res.end(data);
      }
    });
  } else if (req.url === '/style.css') {
    const stylePath = path.join(__dirname, '..', 'src', 'style', 'style.css');
    fs.readFile(stylePath, (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, getContType('plain'));
        res.end('Error loading style.css');
      } else {
        res.writeHead(200, getContType('css'));
        res.end(data);
      }
    });
  } else if (req.url === '/index.js') {
    const indexPath = path.join(__dirname, '..', 'build', 'index.js');
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, getContType('plain'));
        res.end('Error loading index.js');
      } else {
        res.writeHead(200, getContType('javascript'));
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, getContType('plain'));
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

