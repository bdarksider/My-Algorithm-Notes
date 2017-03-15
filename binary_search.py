def binary_search(sorted_array, item):
    low = 0
    high = len(sorted_array) - 1
    while low <= high:
        mid = (low + high)//2
        if item == sorted_array[mid]:
            return True
        elif item < sorted_array[mid]:
            high = mid -1
        else:
            low = mid + 1
    return False


assert(binary_search([1,2,3,4, 10, 12, 42, 45], 12) == True)

