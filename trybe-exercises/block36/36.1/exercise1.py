def calculando_preco(primeiro_preco, segundo_preco):
    return primeiro_preco * segundo_preco


def smallest_number(array):
    small_number = 10000
    for number in array:
        if number < small_number:
            small_number = number
    return small_number


def average_array(array):
    average = 0
    for number in array:
        average += number
    return average / len(array)


def asterisc_print(num):
    string = ''
    num2 = num
    num3 = num
    while num2 > 0:
        while num3 > 0:
            string += '*'
            num3 -= 1
        string += "\n"
        num3 = num
        num2 -= 1
    return string


def matriz_asterisc(num):
    for i in range(num):
        print('*' * num)
    return ''


def escada_asterisct(num):
    for i in range(num + 1):
        print('*' * i)
    return ''


print(matriz_asterisc(6))

print(escada_asterisct(6))
# array_exercise_2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
# print(3 // 2)
# print(average_array(array_exercise_2))
# print(smallest_number(array_exercise_2))
# print(calculando_preco(2, 6))
