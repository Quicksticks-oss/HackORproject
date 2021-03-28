import os
import subprocess
from subprocess import CREATE_NEW_CONSOLE

def Start():
    dir_path = os.path.dirname(os.path.realpath(__file__))
    path1 = os.path.join(dir_path, "lib/pypy3.7/pypy3.exe")
    path2 = os.path.join(dir_path, "src/main.py")
    cmd = path1 + ' ' + path2
    subprocess.Popen('wallet/WebSock.exe', creationflags=CREATE_NEW_CONSOLE)
    os.system(cmd)


if __name__ == '__main__':
    Start()
