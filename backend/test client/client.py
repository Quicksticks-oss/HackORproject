# !/usr/bin/python3
import socket

ip = '127.0.0.1'
port_tcp = 19295
port_udp = 21025

socket_tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket_udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

socket_tcp.connect((ip, port_tcp))
print('Connected...')
while True:
    print(socket_tcp.recv(1024).decode())
    socket_tcp.send(input('MSG:  ').encode())
socket_tcp.close()
