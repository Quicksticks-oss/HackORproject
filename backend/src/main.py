# !/usr/bin/python3
import threading
import hashlib
import socket
import json
import time
import sys
import os

class Transaction:
    def __init__(self, sender, recver, ammount):
        self.sender = sender
        self.recver = recver
        self.ammount = ammount

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
        hostname = socket.gethostname()   
        ip = socket.gethostbyname(hostname) 
        # Variables
        self.ip = ip
        self.port_tcp = 19295
        self.port_udp = 21025
        self.cap = 1000000
        self.blocks = []
        self.blocks_ver = []
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
        self.block_data = {
        "prevhash":str(prev),
        "hash":str(hash),
        "transaction":[
        send,
        recv,
        ammount
        ],
        "nonce":str(nonce),
        "time":str(time.ctime())}

        f = open('data/blocks/'+str(hash)+'.json', 'w+')
        f.write(json.dumps(block_data))
        f.close()
        print('* -----------')
        print('*', str(hash))
        print('* BLOCK ADDED')
        print('*', time.ctime())
        print('* -----------')
        return block_data

    def generate_hash(self,data):
        return hashlib.sha256(str(data).encode('utf-8')).hexdigest()

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
        try:
            c.send(str(len(self.blocks)).encode('utf-8'))
            while True:
                data = c.recv(1024).decode('utf-8')
                if data != None and data != '':
                    data_list = data.split()
                    if data_list[0] == 'GET':
                        if data_list[1] == 'BLOCK':
                            index = data_list[2]
                        try:
                            b = self.blocks[int(index) + 1]
                            c.send(str(b).encode('utf-8'))
                        except:
                            c.send(b'404')
                    elif data_list[0] == 'MINER':
                        self.miners.append(c)
                        miner = True
                        c.send(b'ACCEPTED')
                    elif data_list[0] == 'ADD':
                        if data_list[1] == 'BLOCK':
                            send = data_list[2]
                            recv = data_list[3]
                            amm = data_list[4]
                            nonce = data_list[len(data_list)-1]
                            hash_ = self.generate_hash(nonce)

                            self.block_data = {
                            "prev":len(self.blocks)-1,
                            "hash":hash_,
                            "transaction": [
                                send,
                                recv,
                                amm
                            ],
                            "nonce":str(nonce),
                            "time":str(time.ctime())}
                            self.blocks_ver.append(self.block_data)
                            time.sleep(0.1)
                            self.miners_send(hash_, len(self.blocks_ver)-1)
                            c.send(b'Block sent...')
                    elif data_list[0] == 'GREENLIGHT' and miner == True:
                        index = int(data_list[1])
                        self.blocks.append(self.blocks_ver[index])
                        self.blocks_ver.remove(self.blocks_ver[index])
                        f = open('data/blocks/'+str(len(self.blocks)-1)+'.json', 'w+')
                        f.write(self.blocks[index])
                        f.close()
                        print('* -----------')
                        print('* BLOCK ADDED')
                        print('*', time.ctime())
                        print('* -----------')
        except:
            c.close()
            if miner:
                self.miners.remove(c)

    def generate_addr(self):
        return hashlib.sha256(str(time.time()).encode('utf-8')).hexdigest()

    def update(self):
        while True:
            time.sleep(60)
            print('* --- UPDATE --- *')
            print('* TIME:', time.ctime())
            print('* BLOCKS:', len(self.blocks))
            print('* MINERS:', len(self.miners))
            print('* -------------- *')

    def miners_send(self, block, index):
        for x in range(len(self.miners)):
            self.miners[x].send(block.encode('utf-8'))
            self.miners[x].send(str(index).encode('utf-8'))
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
        self.blocks.append(b)

# Start
if __name__ == '__main__':
    main = Main()
    main.run()
