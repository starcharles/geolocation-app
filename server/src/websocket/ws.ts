import * as WebSocket from 'ws';

interface ExtWebSocket extends WebSocket {
    isAlive: boolean;
}

function createMessage(content: string, isBroadcast = false, sender = 'NS'): string {
    return JSON.stringify(new Message(content, isBroadcast, sender));
}

export class Message {
    constructor(
        public content: string,
        public isBroadcast = false,
        public sender: string
    ) { }
}

export function wsInit(wss: WebSocket.Server){
    wss.on('connection', (ws: WebSocket) => {

        console.log('websocket open');

        const extWs = ws as ExtWebSocket;

        extWs.isAlive = true;

        ws.on('pong', () => {
          extWs.isAlive = true;
        });

        //connection is up, let's add a simple simple event
        ws.on('message', (msg: string) => {
            console.log(msg);

            // const message = JSON.parse(msg) as Message;

            // setTimeout(() => {
            //     if (message.isBroadcast) {
            //
            //         //send back the message to the other clients
            //         wss.clients.forEach(client => {
            //             // wss.clients.forEach(client => {
            //                 if (client != ws) {
            //                     client.send(createMessage(message.content, true, message.sender));
            //                 }
            //             });
            //
            //     }
            //     ws.send(createMessage(`You sent -> ${message.content}`, message.isBroadcast));
            // }, 1000);
        });

        //send immediatly a feedback to the incoming connection
        ws.send(createMessage('Hi there, I am a WebSocket server'));
        ws.on('error', (err) => {
            console.warn(`Client disconnected - reason: ${err}`);
        })
    });
}

