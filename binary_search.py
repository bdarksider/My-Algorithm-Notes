# Binary Search template file
from time import time

def contains(collection, target):
    """Determine whether collection contains target."""
    return target in collection

def bs_contains(ordered, target):
    """Use binary array search to return index position of target
     in collection"""

    low = 0
    high = len(ordered) - 1
    while low <= high:
        mid = (low + high) // 2
        if target == ordered[mid]:
            return mid
        elif target < ordered[mid]:
            high = mid-1
        else:
            low = mid+1
    return -(low + 1)

def insertInPlace(ordered, target):
    """Inserts target into its proper location"""
    idx = bs_contains(ordered, target)
    print(idx)
    if idx < 0:
        ordered.insert(-(idx + 1), target)
        return
    ordered.insert(idx, target)

def performance():
    """Demonstrate execution performance of conains"""
    n = 1024
    while n < 50000000:
        sorted = list(range(n))
        now = time()

        # Code whose performance is to be evavluated
        insertInPlace(sorted, n+1)

        done = time()

        print(n, (done-now)*1000)
        n *= 2

performance()

