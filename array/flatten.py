"""
Implement Flatten Arrays.
Given an array that may contain nested arrays,
give a single resultant array.
function flatten(input){
}
Example:
Input: var input = [2, 1, [3, [4, 5], 6], 7, [8]];
flatten(input);
Output: [2, 1, 3, 4, 5, 6, 7, 8]
"""

def list_flatten(l, a=None):
    a = list(a) if isinstance(a, (list, tuple)) else []
    for item in l:
        if isinstance(item, (list, tuple)):
            a = list_flatten(item, a)
        else:
            a.append(item)
    return a

assert list_flatten([2, 1, [3, [4, 5], 6], 7, [8]]) == [2, 1, 3, 4, 5, 6, 7, 8]