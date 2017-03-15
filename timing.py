from timeit import default_timer as timer
from binary_search import binary_search

def contains(collection, target):
    """Determine whether collection contains target. """
    return target in collection

def performance():
    """Demonstrate execution performance of contains"""
    n = 1024
    while n < 50000000:
        sorted_array = list(range(n))
        now = timer()

        # Code whose performance is to be evaluated
        insert_in_place(sorted_array, n + 1)

        done = timer()

        print(n, (done-now) * 1000)
        n *= 2

def insert_in_place(ordered, target):
    """Inserts target into its proper location"""
    for i in range(len(ordered)):
        if target < ordered[i]:
            ordered.insert(i, target)
            return
    ordered.append(target)

performance()

