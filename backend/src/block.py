# !/usr/bin/python3
from hash_ import *
import hashlib
import json
import time
import os

class Block:
    def __init__(self, prev=None, hash=None, recv=None, send=None, ammount=0, fine=0.01, nonce=None):
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

    def make_block(self, name='Block', data=None):
        f = open('data/blocks/'+name+'.json', 'w+')
        f.write(json.dumps(data))
        f.close()
