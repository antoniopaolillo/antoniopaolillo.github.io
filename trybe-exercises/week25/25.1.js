db.collection.update(one or many)({ campo e validação, ex: qty: { $lte: 50}}, {campos a serem alterados});
$set => seta o que quiser
$mul => multiplica o campo por um valor especificado ( $mul: { qty: 5});
$inc => incrementa ou decrementa qualquer quantidade;
$min => caso o valor seja maior que o min estipulado, ele altera para o min
$max => mesma logica do min, só que maior
comparando datas => 
db.tags.update(
    { _id: 1 },
    {
      $min: { dateEntered: new Date("2019-09-25") },
      $max: { dateExpired: new Date("2019-10-02") }
    }
  );


  db.customers.updateOne(
    { _id: 1 },
    {
  currentDate: {
        lastModified: true,
        "cancellation.date": { $type: "timestamp" }
      },
  set: {
        "cancellation.reason": "user request",
        status: "D"
      }
    }
  );
resultado =>
{
  "_id": 1,
  "status": "D",
  "lastModified": ISODate("2020-01-22T21:21:41.052Z"),
  "cancellation": {
    "date": Timestamp(1579728101, 1),
    "reason": "user request"
  }
}

$rename => altera o nome do campo

db.products.updateMany(
  { productName: "Banana" },
  {
    $unset: { quantity: "" }
  }
);

// EXERCICIOS
1.db.movies.update({title: "Batman"}, {$set: {imdbRating: 7.7}});
2.db.movies.update({ title: "Godzilla"}, { $set: {budget: 1}});
3.db.movies.update({ title: "Home Alone"}, { $set: {budget: 15, imdbRating: 5.5}});
4.db.movies.update({ title: "Batman"}, { $inc: { imdbRating: 2}});
5.db.movies.update({ title: "Home Alone"}, { $inc: { budget: 5}});
6.db.movies.update({ title:"Batman"}, { $mul: { imdbRating: 4}});
7.db.movies.update({ title: "Batman"}, { $rename: { budget: "estimatedBudget"}});
8.db.movies.update({ title: "Home Alone"}, { $min: { budget: 5}});
9.db.movies.update({title: "Godzilla"}, { $max: { imdbRating: 8.6}, $set: { "category.1": "thriller"}});
10.db.movies.update({ title: "Home Alone"}, { $currentDate: { "lastUpdate": { $type: "timestamp"}}});
11.db.movies.updateMany({}, { $set: { "sequels": 0 }});
12.db.movies.updateMany({}, { $unset: { "budget": "", "estimatedBudget": ""}});
