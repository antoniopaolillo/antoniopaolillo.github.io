1;
db.clientes.aggregate({ $match: { sexo: "MASCULINO" } });

2;
db.clientes.aggregate({
  $match: {
    $and: [
      { sexo: "FEMININO" },
      {
        dataNascimento: {
          $lte: new ISODate("2005-11-31"),
          $gte: new ISODate("1995-01-01")
        }
      }
    ]
  }
});

3;
db.clientes.aggregate(
  {
    $match: {
      $and: [
        { sexo: "FEMININO" },
        {
          dataNascimento: {
            $lte: new ISODate("2005-11-31"),
            $gte: new ISODate("1995-01-01")
          }
        }
      ]
    }
  },
  { $limit: 5 }
);

4;
db.clientes.aggregate([
  { $match: { "endereco.uf": "SC" } },
  { $group: { _id: "$endereco.uf", total: { $sum: 1 } } }
]);

5;
db.clientes.aggregate({ $group: { _id: "$sexo", total: { $sum: 1 } } });

6;
db.clientes.aggregate({
  $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 } }
});

7;
db.clientes.aggregate([
  {
    $group: {
      _id: { estado: "$endereco.uf", sexo: "$sexo" },
      total: { $sum: 1 }
    }
  },
  { $project: { estado: "$_id.estado", sexo: "$_id.sexo", total: 1, _id: 0 } }
]);

8;
db.vendas.aggregate([
  { $group: { _id: "$clienteId", total: { $sum: "$valorTotal" } } },
  { $sort: { total: -1 } },
  { $limit: 5 }
]);

9;
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: new ISODate("2019-01-01"),
        $lte: new ISODate("2019-11-31")
      }
    }
  },
  { $group: { _id: "$clienteId", total: { $sum: "$valorTotal" } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);

10;
db.vendas.aggregate([
  { $group: { _id: "$clienteId", total: { $sum: 1 } } },
  { $match: { total: { $gt: 5 } } },
  { $count: "clientes" }
]);

11;
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: new ISODate("2020-01-01"),
        $lte: new ISODate("2020-04-01")
      }
    }
  },
  { $group: { _id: "$clienteId", total: { $sum: 1 } } },
  { $match: { total: { $lt: 3 } } },
  { $count: "clientes" }
]);

12;
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: new ISODate("2019-01-01"),
        $lte: new ISODate("2019-12-31")
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente"
    }
  },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      totalVendas: { $sum: "$valorTotal" }
    }
  },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 },
  { $unwind: "$_id" },
  { $project: { _id: 0, uf: "$_id", totalVendas: 1 } }
]);

// Exercício 13: Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019. Ordene os resultados pelo nome da uf. Retorne os documentos no seguinte formato:

// {
//   "_id": "MG",
//   "mediaVendas": 9407.129225352113,
//   "totalVendas": 142
// }
13;
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: new ISODate("2019-01-01"),
        $lte: new ISODate("2019-12-31")
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente"
    }
  },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } },
  { $unwind: "$_id" }
]);
