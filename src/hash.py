# !/usr/bin/python3
import hashlib
import time

def hash(data):
    m = hashlib.sha256()
    m.update(data)
    return m.hexdigest()
