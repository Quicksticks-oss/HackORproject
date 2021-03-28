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
    def __init__(self, ip='192.168.1.18'):
        while True:
            self.passphrase = input('Passphrase: ')
            res = self.login(self.passphrase)
            if res == True:
                self.keypriv = self.generate_hash(self.passphrase)
                self.keypub = self.generate_hash(self.keypriv)
                self.ip = ip
                self.port_tcp = 19295
                self.port_udp = 21025
                self.socket_tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                self.socket_udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
                self.socket_tcp.connect((self.ip, self.port_tcp))
                self.blocks = []
                self.len_blocks = int(self.socket_tcp.recv(1024).decode())
                self.load_blocks()
                if self.len_blocks != len(self.blocks):
                    print('Downloading blocks...')

                self.value = 0

                while self.len_blocks != len(self.blocks):
                    self.socket_tcp.send(('GET BLOCK '+str(len(self.blocks))).encode())
                    block = self.socket_tcp.recv(1024).decode()
                    self.blocks.append(block)
                    f = open('data/blocks/'+str(len(self.blocks)), 'w+')
                    f.write(block)
                    f.close()

                print('Blocks:', self.len_blocks)
                print('Balance:', self.value)

                while True:
                    pass
            else:
                print('Wrong login...')

    def login(self, passw):
        try:
            f = open('account.acc', 'r+')
            if f.read() == self.generate_hash(passw):
                print('Logged in')
                return True
            else:
                return False
            f.close()
        except:
            f = open('account.acc', 'w+')
            f.write(self.generate_hash(passw))
            f.close()
            return True

    def run_miner(self):
        try:
            while True:
                hash_ = self.socket_tcp.recv(1024).decode()
                index = self.socket_tcp.recv(1024).decode()
                print(hash_)
                print(index)
                responce = self.mine(hash_)
                if responce == True:
                    self.socket_tcp.send(('GREENLIGHT '+index).encode())
                else:
                    self.socket_tcp.send(('REDLIGHT '+index).encode())
        except:
            pass

    def generate_hash(self,data):
        return hashlib.sha256(str(data).encode('utf-8')).hexdigest()

    def mine(self, hash_):
        print('Mining Hash...')
        pre_time = time.time()
        for x in range(10000000000):
            new_hash = self.generate_hash(x)
            if new_hash == hash_:
                print('FOUND!', hash_)
                print('Took', (pre_time-time.time()) * -1, 'seconds!')
                return True

        return False


    def load_blocks(self):
        try: # Checks if the blocks dir exists
            os.mkdir('data') # Creates the dir if its not there
            os.mkdir('data/blocks') # Creates the dir if its not there
        except:
            pass

        path = os.getcwd() # Gets the current working dir
        list_of_files = []
        path = os.path.join(path, 'data/blocks') # Joins the cwd with blocks dir

        for root, dirs, files in os.walk(path):
            for file in files:
                list_of_files.append(os.path.join('data/blocks/',file))

        if len(list_of_files) > 0:
            for name in list_of_files:
                f = open(name, 'r')
                self.blocks.append(f.read())
                f.close()
        else:
            print('* NO BLOCKS!')

# Start
if __name__ == '__main__':
    main = Main()
