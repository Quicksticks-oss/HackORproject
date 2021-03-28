for x in range(32):
    f = open(str(x)+'.json', 'w+')
    data ='''
{
'hash': awjfpijawpjif
}
'''
    f.write(data)
    f.close()
