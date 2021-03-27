# !/usr/bin/python3
from hash_ import *
import hashlib
import json
import time
import os

class Block:
    def __init__(self, hash=None, recv=None, send=None, ammount=0, fine=1):
        if ammount > fine and send != None and len(list(send)) == 24:
            if recv != None and len(list(recv)) == 24:
                block_data = {
                    "hash": str(hash),
                    "recv": str(recv),
                    "send": str(send),
                    "time": str(time.ctime())
                }
                self.add_block(name=str(hash), data=block_data)

    def add_block(self, name='Block', data=None):
        f = open(name+'.json')
        f.write(json.dumps(data))
        f.close()
