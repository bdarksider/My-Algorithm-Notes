"""
There are people sitting in a circular fashion,
print every third member while removing them,
the next counter starts immediately after the member is removed.
Print till all the members are exhausted.
For example:
Input: consider 123456789 members sitting in a circular fashion,
Output: 369485271
"""

a = ['1','2','3','4','5','6','7','8','9']
def circular(array, skip):
    skip = skip - 1
    idx = 0
    while len(array):
        idx = (skip+idx)%len(array)
        print(array.pop(idx))

circular(a, 3)

