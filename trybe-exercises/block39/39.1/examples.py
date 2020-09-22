nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1, 4, 4, 4, 1]
text = ['ana', 'ama', 'joao', 'que', 'ama', 'jose', 'mas', 'jose', 'nao', 'ama', 'ana']
listA = [1, 2, 3, 4, 5, 6]
listB = [4, 5, 6, 7, 8, 9]

def words(text):
    screen = {}

    for word in text:
        first_char = word[0]
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)
    return screen


def count(nums):
    count = {}
    most_frequent = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1

        if count[num] > most_frequent:
            most_frequent = num

    return most_frequent


for key, value in words(text).items():
    print(f"{key}: {value}")

print(count(nums))
