# file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

# file.write("nome idade\n")
# file.write("Maria 45\n")
# file.write("Miguel 33\n")

# print("tuleio 22", file=file)

# LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
# file.writelines(LINES)

# file.close()

# # escrita
# file = open("arquivo.txt", mode="w")
# file.write("Trybe S2")
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# content = file.read()
# print(content)
# file.close()  # não podemos esquecer de fechar o arquivo

# # escrita
# file = open("arquivo.txt", mode="w")
# LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
# file.writelines(LINES)
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# for line in file:
#     print(line)  # não esqueça que a quebra de linha também é um caractere da linha
# file.close()  # não podemos esquecer de fechar o arquivo

# with open("arquivo.txt", "r") as file:
#     # file.write("Michelle 27\n")
#     content = file.read()
#     print(content)
# # como estamos fora do contexto, o arquivo foi fechado
# print(file.closed)


with open('estudents.txt', mode="r") as file:
    for estudents in file:
        note = estudents.split(' ')
        if int(note[1]) > 5:
            print(note[0])
