#!/usr/bin/env python3
import asyncio
import websockets
import json

async def client():
    uri = "ws://localhost:5445"
    async with websockets.connect(uri) as websocket:
            data = input("Enter a CMD: ")
            await websocket.send(data)
            response = await websocket.recv()
            print(response)

while True:
    asyncio.get_event_loop().run_until_complete(client())
