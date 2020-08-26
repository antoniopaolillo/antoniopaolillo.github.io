from posfix_evaluator.operations import plus, subtract, divide
import pytest


def test_when_plus_two_and_three_returns_five():
    assert plus(2, 3) == 5


def test_when_plus_three_and_two_returns_five():
    # commutative
    assert plus(3, 2) == 5


def test_when_plus_four_and_six_returns_ten():
    assert plus(4, 6) == 10


def test_when_subtracat_ten_and_6_returns_four():
    assert subtract(10, 6) == 4


def test_when_divide_four_by_two_returns_2():
    # usamos a função pytest.approx para evitar de problemas de precisão em
    # comparações com números em ponto flutuante
    assert divide(4, 2) == pytest.approx(2.0)


def test_when_divide_negative_numbers_returns_positive_one():
    # divisão entre números negativos retorna um número positivo
    assert divide(-3, -2) == pytest.approx(1.5)


def test_when_divide_number_by_zero():
    # por enquanto não vamos comparar o retorno com nada,
    # vamos só analisar o que acontece
    assert divide(3, 0)
