# !/usr/bin/python3
from hash_ import *
import threading
import hashlib
import socket
import json
import time
import sys
import os

# Main class
class Main:
    def __init__(self, ip='127.0.0.1'):
        logo = '''* 
* 
* ╔═══╗             ╔╗ ╔═══╗╔═══╗
* ║╔═╗║            ╔╝╚╗║╔═╗║║╔═╗║
* ║║ ╚╝╔═╗╔╗ ╔╗╔══╗╚╗╔╝║║ ║║║╚═╝║
* ║║ ╔╗║╔╝║║ ║║║╔╗║ ║║ ║║ ║║║╔╗╔╝
* ║╚═╝║║║ ║╚═╝║║╚╝║ ║╚╗║╚═╝║║║║╚╗
* ╚═══╝╚╝ ╚═╗╔╝║╔═╝ ╚═╝╚═══╝╚╝╚═╝
*         ╔═╝║ ║║                
*         ╚══╝ ╚╝
*'''
        time_past = time.time()
        print('* --------------------------')
        print('* Server starting...')
        print('* --------------------------')
        # Variables
        self.ip = ip
        self.port_tcp = 19295
        self.port_udp = 21025
        self.cap = 1000000
        self.blocks = []
        self.miners = []
        # Creates the sockets
        self.socket_tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socket_udp_data = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # Binds the TCP and UDP sockets to specific ips and ports
        self.socket_tcp.bind((self.ip, self.port_tcp))
        self.socket_udp_data.bind((self.ip, self.port_udp))
        # Sets the TCP socket to listen mode
        self.socket_tcp.listen(5)
        print('*')
        print('* --------------------------')
        print('* Loading blocks...')
        self.load_blocks()
        print('*', str(len(self.blocks)) , 'Blocks Loaded!')
        print('* --------------------------')
        print('*')
        print(logo)
        print('* --------------------------')
        print('* --  IP:', self.ip)
        print('* --  PORT TCP:', self.port_tcp)
        print('* --  PORT UDP:', self.port_udp)
        print('* --------------------------')
        print('*')
        print('* --------------------------')
        print('* --  CAP:', self.cap)
        print('* --  BLOCKS:', len(self.blocks))
        print('* --------------------------')
        print('*')
        time_new = (time_past - time.time()) * -1
        print('* TIME:', time_new)
        print('*')
        print('* --------------------------')
        print('* Server started!')
        print('* --------------------------')

    def block(self, prev=None, hash=None, recv=None, send=None, ammount=0, fine=0.01, nonce=None):
        if ammount > fine and send != None and len(list(send)) == 24:
            if recv != None and len(list(recv)) == 24 and prev != None and nonce != None:
                block_data = {
                    "prevhash": str(prev),
                    "hash": str(hash),
                    "recv": str(recv),
                    "send": str(send),
                    "ammount": str(ammount),
                    "nonce": str(nonce),
                    "time": str(time.ctime())
                }
                self.make_block(name=str(hash), data=block_data)
                return block_data

    def make_block(self, name='Block', data=None):
        f = open('data/blocks/'+name+'.json', 'w+')
        f.write(json.dumps(data))
        f.close()
        print('* -----------')
        print('*', str(hash))
        print('* BLOCK ADDED')
        print('*', time.ctime())
        print('* -----------')

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
                print('* -- ', str(name))
                f = open(name, 'r')
                self.blocks.append(f.read())
                f.close()
        else:
            print('* NO BLOCKS!')

    def client(self, c):
        miner = False
        c.send(str(len(self.blocks)).encode('utf-8'))
        while True:
            data = c.recv(1024).decode('utf-8')
            if data != None and data != '':
                data_list = data.split()
                if data_list[0] == 'GET':
                    if data_list[1] == 'BLOCK':
                        index = data_list[2]
                    try:
                        b = self.blocks[int(index)]
                        c.send(str(b).encode('utf-8'))
                    except:
                        c.send(b'404')
                elif data_list[0] == 'MINER':
                    self.miners.append(c)
                    miner = True
                    c.send(b'ACCEPTED')
                elif data_list[0] == 'ADD':
                    if data_list[1] == 'BLOCK':
                        b = data_list[2]
                        self.miners_send(b)
                elif data_list[0] == 'GREENLIGHT' and miner == True:
                    self.add_block('aaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaa', '123', '0000', data_list[1])

    def update(self):
        while True:
            time.sleep(60)
            print('* --- UPDATE --- *')
            print('* TIME:', time.ctime())
            print('* BLOCKS:', len(self.blocks))
            print('* MINERS:', len(self.miners))
            print('* -------------- *')

    def miners_send(self, block):
        for x in range(len(self.miners)):
            self.miners[x].send(block.encode('utf-8'))
        print('* -------------- *')
        print('* Block sent...')
        print('* -------------- *')

    def run(self):
        t = threading.Thread(target=self.update, args=())
        t.start()
        # Forever loop
        while True:
            conn, addr = self.socket_tcp.accept()
            del(addr)
            t = threading.Thread(target=self.client, args=(conn, ))
            t.start()

    def add_block(self, hash=None, recv=None, send=None, ammount=0, nonce=None):
        prev_index = len(self.blocks)-1
        prev = self.blocks[prev_index]
        b = self.block(prev, hash, recv, send, ammount, nonce)
        self.blocks.append(str(b))

# Start
if __name__ == '__main__':
    main = Main()
    main.run()
