  async function getBooks(category) {
    const res = await fetch(`https://stephen-king-api.onrender.com/api/${category}`);
    const books = await res.json();
    return books;
}


async function getBookById(id) {
  const res = await fetch(`https://stephen-king-api.onrender.com/api/book/${id}`)
  return await res.json()
}

async function getShortById(id) {
  const res = await fetch(`https://stephen-king-api.onrender.com/api/short/${id}`)
  return await res.json()
}

async function getVillainById(id) {
  const res = await fetch(`https://stephen-king-api.onrender.com/api/villain/${id}`)
  return await res.json()
}


export { getBooks , getBookById, getShortById, getVillainById };
