# Given a string, find the length of the longest substring
# without repeating characters.

# Examples:

# Given "abcabcbb", the answer is "abc", which the length is 3.

# Given "bbbbb", the answer is "b", with the length of 1.

# Given "pwwkew", the answer is "wke", with the length of 3.
# Note that the answer must be a substring,
# "pwke" is a subsequence and not a substring.
def longest_non_repeat(s):
    start, max_length = 0, 0
    used_chars = {}
    for i, char in enumerate(s):
        if char in used_chars and start <= used_chars[char]:
            start = used_chars[char]+ 1
        else:
            max_length = max(max_length, i-start+1)
        used_chars[char] = i
    return max_length

assert longest_non_repeat("abcabcbb") == 3
assert longest_non_repeat("bbbb") == 1
assert longest_non_repeat("pwwkew") == 3
assert longest_non_repeat("abcabcdefbb") == 6