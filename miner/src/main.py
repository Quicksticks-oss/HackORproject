# !/usr/bin/python3
import threading
import hashlib
import socket
import json
import time
import os

# Main class
class Main:
    def __init__(self, ip='127.0.0.1'):
        self.ip = ip
        self.port_tcp = 19295
        self.port_udp = 21025

        self.socket_tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socket_udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.socket_tcp.connect((self.ip, self.port_tcp))
        self.blocks = int(self.socket_tcp.recv(1024).decode())
        self.socket_tcp.send(b'MINER')

        logo = '''
.---------------.
| CryptOR MINER |
'---------------'
        '''
        print(logo)
        print('Waiting for blocks...')
        print(self.socket_tcp.recv(1024).decode())

    def run(self):
        while True:
            block = self.socket_tcp.recv(1024).decode()
            print(block)
            self.socket_tcp.send('GREENLIGHT 123'.encode())

# Start
if __name__ == '__main__':
    main = Main()
    main.run()
