def remove_sub(word):
    start = 0
    end = 0
    flag = True
    while flag:
        flag = False
        print(word)
        for i in range(len(word) - 1):
            if word[i] == word[i+1]:
                flag = True
                start = i
                end = i + 1
                while end < (len(word) - 1) and word[end] == word[end + 1]:
                    end += 1
                print("start", start)
                word = word[0: start] + word[end+1:]
                print(word, end+1)
                break
    return word

print(remove_sub("aaeaaabcccb"))

assert remove_sub("aaeaabccb") == "e"
assert remove_sub("aafekeaabccb") == "feke"
assert remove_sub("aafekeaabccbb") == "feke"
