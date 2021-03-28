# !/usr/bin/python3
import socket
import random

ip = input('IP: ')
port_tcp = 19295
port_udp = 21025

socket_tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket_udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

socket_tcp.connect((ip, port_tcp))
socket_tcp.send(('ADD BLOCK 780708709098709 890809809890809890 123 '+str(random.randint(111111,333333))).encode('utf-8'))
print('Connected...')
while True:
    print(socket_tcp.recv(1024).decode())
socket_tcp.close()
