A query abaixo usa o operador de comparação $gt para retornar os documentos em que o valor do campo qty seja maior do que 4:

db.collection.find( { qty: { $gt: 4 } } )

db.bios.find( { "name.last": "Hopper" } )

db.bios.find({}, { name: 1 }) = SELECT name FROM bios;

db.collection.find(<query>).limit(<número>) == "limitar"

db.bios.find().limit(5).pretty() = "formatar

db.bios.find().skip(2) == 'OFFSET'


ex: 
1) db.bios.find({"_id": 8})
2) db.bios.find({"_id": 8}, {"_id": 1, "name": 1}).pretty()
3) db.bios.find({"_id": 8}, {"name": 1, "birth": 1}).pretty()
4) db.bios.find({"name.first": "John"}).pretty()
5) db.bios.find().limit(3).pretty()
6) db.bios.find().skip(5).limit(2).pretty()
7) db.books.find().count()
8) db.books.find({"status": "PUBLISH"}).count()
9) db.books.find({}, {"title": 1, "isbn": 1, "pageCount": 1, "_id": 0}).limit(3)
10) db.books.find({"status":"MEAP"}, {"_id": 1, "title": 1, "authors": 1, "status": 1}).skip(5).limit(10)
