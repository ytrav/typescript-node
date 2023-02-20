"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const port = 1244;
function getContType(type) {
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
            }
            else {
                res.writeHead(200, getContType('html'));
                res.end(data);
            }
        });
    }
    else if (req.url === '/style.css') {
        const stylePath = path.join(__dirname, '..', 'src', 'style', 'style.css');
        fs.readFile(stylePath, (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, getContType('plain'));
                res.end('Error loading style.css');
            }
            else {
                res.writeHead(200, getContType('css'));
                res.end(data);
            }
        });
    }
    else if (req.url === '/index.js') {
        const indexPath = path.join(__dirname, '..', 'build', 'index.js');
        fs.readFile(indexPath, (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, getContType('plain'));
                res.end('Error loading index.js');
            }
            else {
                res.writeHead(200, getContType('javascript'));
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(404, getContType('plain'));
        res.end('Not found');
    }
});
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
