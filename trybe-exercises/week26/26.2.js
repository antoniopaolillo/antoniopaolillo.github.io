// Exercício 8: Ainda nesse pipeline, descubra os 5 estados com mais compras.

// Exercício 9: Descubra o cliente que mais consumiu QUEIJO PRATO. Retorne um documento com a seguinte estrutura:

// Copiar
// {
//   "nomeCliente": "NOME",
//   "uf": "UF DO CLIENTE",
//   "totalConsumido": 100
// }
// Exercício 10: Selecione todas as vendas do mês de Março de 2020, com status EM SEPARACAO. Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId, dataVenda e dataEntregaPrevista.

1;
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, 86400000 * 365]
        }
      }
    }
  }
]);

2;
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, 86400000 * 365]
        }
      }
    }
  },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $count: "idade" }
]);

// Exercício 3: Remova o estágio $count do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras.
3;
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, 86400000 * 365]
        }
      }
    }
  },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  }
]);

// Exercício 4: Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.
4;
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, 86400000 * 365]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: new ISODate("2019-06-30"),
        $lte: new ISODate("2020-03-31")
      }
    }
  }
]);

// Exercício 5: Confira o número de documentos retornados pelo pipeline com o método itcount(). Até aqui você deve ter 486 documentos sendo retornados.
5;
db.clientes
  .aggregate([
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ["$$NOW", "$dataNascimento"] },
              86400000 * 365
            ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras"
      }
    },
    {
      $match: {
        "compras.dataVenda": {
          $gte: new ISODate("2019-06-01"),
          $lte: new ISODate("2020-03-31")
        }
      }
    }
  ])
  .itcount();

// Exercício 6: Deixe apenas os top 10 clientes com mais compras nesse período.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, 86400000 * 365]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: new ISODate("2019-06-30"),
        $lte: new ISODate("2020-03-31")
      }
    }
  },
  {
    $addFields: {
      total_compras: {
        $size: "$compras"
      }
    }
  },
  {
    $sort: {
      total_compras: -1
    }
  },
  { $limit: 10 }
]);

// Exercício 7: Para esses clientes, adicione um campo chamado compras.valorComDesconto em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra (valorTotal).
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, 86400000 * 365]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  },
  {
    $addFields: {
      totalCompras: {
        $size: "$compras"
      }
    }
  },
  {
    $sort: { totalCompras: -1 }
  },
  {
    $limit: 10
  },
  { $unwind: "$compras" },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $multiply: ["$compras.valorTotal", 0.9]
      }
    }
  }
]);
