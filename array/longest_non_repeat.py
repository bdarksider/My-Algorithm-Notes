def longest_non_repeat(s):
    start, maxlen = 0, 0
    used_char = {}
    for i, char in enumerate(s):
        if char in used_char and start <= used_char[char]:
            start = used_char[char] + 1
        else:
            maxlen = max(maxlen, i-start+1)
        print(i, used_char, maxlen)
        used_char[char] = i
    return maxlen



print(longest_non_repeat("abcabcbb"))
# print(longest_non_repeat("bbbb"))
# print(longest_non_repeat("pwwkew"))
# print(longest_non_repeat("abcabcdefbb"))