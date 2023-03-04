import itertools

def increment_name():
    for size in itertools.count(1):
        for name in itertools.product('abcdefghijklmnopqrstuvwxyz', repeat=size):
            yield ''.join(name)

for name in increment_name():
    if name==456976:
        break 
    print(name)

# def increment_name():
#     for size in itertools.count(.5):
#         print("size",size)
# increment_name()
# print( itertools.count(1))