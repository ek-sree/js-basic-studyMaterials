var library = [
    {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
    },
    {
    title: 'Wings of fire',
    author: 'APJ Abdul kalam',
    readingStatus: true
    },
    {
     title: 'Mockingjay: The Final Book of The Hunger Games',
     author: 'Suzanne Collins',
     readingStatus: false
     }
     ];

        library.forEach((book)=>{
        if(book.readingStatus){
        console.log(`Already read ${book.title} by ${book.author}`)
        }else{
        console.log(`You still need to read ${book.title} by ${book.author}`)
        }
        })
            