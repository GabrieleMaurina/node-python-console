import sys
while True:
    print('> ', end='')
    data = input()
    try:
        res = eval(data)
        if(res != None):
            print(res)
    except:
        try:
            exec(data)
        except Exception as e:
            print(e, file=sys.stderr)
