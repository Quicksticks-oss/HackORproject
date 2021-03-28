# !/usr/bin/python3
import threading
import hashlib
import socket
import random
import json
import time
import os

# Main class
class Main:
    def __init__(self):
        f = open('ip.cfg', 'r+')
        self.ip = f.read()
        f.close()
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
            hash_ = self.socket_tcp.recv(1024).decode()
            index = self.socket_tcp.recv(1024).decode()
            print(hash_)
            print(str(index))
            responce = self.mine(hash_)
            if responce == True:
                self.socket_tcp.send(('GREENLIGHT '+str(index)).encode())
            else:
                self.socket_tcp.send(('REDLIGHT '+index).encode())

    def generate_hash(self,data):
        return hashlib.sha256(str(data).encode('utf-8')).hexdigest()

    def mine(self, hash_):
        print('Mining Hash...')
        pre_time = time.time()
        for x in range(1111111, 3333333):
            new_hash = self.generate_hash(x)
            if new_hash == hash_:
                print('FOUND!', hash_)
                print('Took', (pre_time-time.time()) * -1, 'seconds!')
                return True

        return False

# Start
if __name__ == '__main__':
    main = Main()
    main.run()
