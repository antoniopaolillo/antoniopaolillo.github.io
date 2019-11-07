
const books = {name:'ok', name3: 'ok2', 3:'ok3'}
function averageAge() {
    const numbersOfBooks = books.length;
    const averageAgeAuthors = books.reduce(( book) =>book.name - book.name3, 0)
    // return averageAgeAuthors / numbersOfBooks;
    console.log(averageAgeAuthors)
}
averageAge()
