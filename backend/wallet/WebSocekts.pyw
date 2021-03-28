#!/usr/bin/env python3
import asyncio
import os
import subprocess
from subprocess import CREATE_NEW_CONSOLE
import websockets
import socket
import time
import hashlib

def generate_hash(data):
    return hashlib.sha256(str(data).encode('utf-8')).hexdigest()

def login(passw):
        try:
            f = open('account.acc', 'r+')
            if f.read() == generate_hash(passw):
                print('Logged in')
                return True
            else:
                return False
            f.close()
        except:
            f = open('account.acc', 'w+')
            f.write(generate_hash(passw))
            f.close()
            return True

async def server(websocket, path):
    try:
        # Get received data from websocket
        data = await websocket.recv()

        # Send response back to client to acknowledge receiving message
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        data_list = data.split()
        if data_list[0] == 'LOGIN':
            res = login(data_list[1])
            if res == True:
                await websocket.send('true')
                subprocess.Popen('Wallet.exe '+ data_list[1], creationflags=CREATE_NEW_CONSOLE)
                time.sleep(1)
            if res == False:
                await websocket.send('false')
        if data_list[0] == 'SIGNUP':
            res = login(data_list[1])
            if res == True:
                await websocket.send('true')
                subprocess.Popen('Wallet.exe '+ data_list[1], creationflags=CREATE_NEW_CONSOLE)
                time.sleep(1)
            if res == False:
                await websocket.send('false')
        if data_list[0] == 'MINE':
            s.sendto('MINE'.encode('utf-8'), ('127.0.0.1', 9294))
            await websocket.send('true')
        if data_list[0] == 'QUITMINE':
            s.sendto('QUITMINE'.encode('utf-8'), ('127.0.0.1', 9294))
            await websocket.send('true')
        if data_list[0] == 'SHA':
            s.sendto(('SHA '+data_list[1]).encode('utf-8'), ('127.0.0.1', 9294))
            data, addr = s.recvfrom(1024)
            print(data.decode())
            await websocket.send(data.decode())
        if data_list[0] == 'ADDTRANSACTION':
            s.sendto(('ADDTRANSACTION '+data_list[1]+' '+data_list[2]+' '+data_list[3]).encode('utf-8'), ('127.0.0.1', 9294))
            await websocket.send('true')
        if data_list[0] == 'GETBLOCK':
            s.sendto(('GETBLOCK '+data_list[1]).encode('utf-8'), ('127.0.0.1', 9294))
            data, addr = s.recvfrom(1024)
            print(data.decode())
            await websocket.send(data)

    except:
        print('Error.')
    

# Create websocket server
start_server = websockets.serve(server, "localhost", 5445)
subprocess.Popen('python Wallet.pyw', creationflags=CREATE_NEW_CONSOLE)
# Start and run websocket server forever
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
