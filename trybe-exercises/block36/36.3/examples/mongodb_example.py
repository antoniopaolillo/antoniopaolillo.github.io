from pymongo import MongoClient

client = MongoClient()
db = client.school

student = {
    "name": "Marcos Fernando",
    "scores": [4, 6],
}
document_id = db.students.insert_one(student).inserted_id

documents = [
    {
        "name": "Mario Luiz",
        "scores": [6, 6],
    },
    {
        "name": "Iara Santos",
        "scores": [8, 9],
    },
    {
        "name": "Iara Borges",
        "scores": [9, 7],
    },
]
db.students.insert_many(documents)

# busca um documento da coleção, sem filtros
print(db.students.find_one())
# busca utilizando filtros
for student in db.students.find({"name": {"$regex": "Iara"}}):
    print(student["name"], "tem as notas ", student["scores"])

client.close()  # fecha a conexão com o banco de dados



with MongoClient() as client:
    db = client.database
    for student in db.students.find({"name": {"$regex": "Iara"}}):
        print(student["name"], "tem as notas ", student["scores"])
