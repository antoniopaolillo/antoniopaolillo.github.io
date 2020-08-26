from posfix_evaluator.operations import plus, subtract, multiplicate, divide


OPERATIONS = {
    "+": plus,
    "-": subtract,
    "*": multiplicate,
    "/": divide,
}


def evaluate(expression):
    breakpoint()
    sequence = []
    # quebra a string em vários pedaços Ex: "1 1 +" -> ["1", "1", "+"]
    for token in expression.split():
        if token.isnumeric():
            sequence.append(int(token))
        # se não for número, é verificado se é uma operação que já implementamo
        elif token in ("+", "-", "*", "/"):
            other = sequence.pop()
            number = sequence.pop()
            operation = OPERATIONS[token]
            sequence.append(operation(number, other))
    return sequence.pop()
