def list_flatten(l, a=None):
    a = list(a) if isinstance(a, (list, tuple)) else []
    for i in l:
        if isinstance(i, (list, tuple)):
            a = list_flatten(i, a)
        else:
            a.append(i)
    return a

assert list_flatten([2, 1, [3, [4, 5], 6], 7, [8]]) == [2, 1, 3, 4, 5, 6, 7, 8]