a = ['1','2','3','4','5','6','7','8','9']
def circular(array, skip):
    skip = skip - 1
    idx = 0
    while len(array) > 0:
        idx = (skip+idx)%len(array)
        print(array.pop(idx))

circular(a, 3)

