def binary_search(sorted_array, elem):
    low = 0
    high = len(sorted_array) - 1
    while low <= high:
        mid = (low + high) // 2
        guess = sorted_array[mid]
        if guess == elem:
            return mid
        if guess > elem:
            high = mid-1
        else:
            low = mid + 1
    return None

print(binary_search([1,2], 2))
