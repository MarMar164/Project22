const symbolButton = document.querySelector("#submit");
const favoriteButton = document.querySelector("#favorite");

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const articleHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#article-title').value.trim();
  const symbol = document.querySelector('#article-symbol').value.trim();
  const publishedDate = document.querySelector('#article-publishedDate').value.trim();
  const image = document.querySelector('#article-image').value.trim();
  const url = document.querySelector('#article-url').value.trim();

  if (title && symbol && publishedDate && image && url) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ title, symbol, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const favoriteHandler = async (event) => {
  event.preventDefault();

  let params = (new URL(document.location)).searchParams;
  let search = params.get('search');
  console.log(search)

  if (search) {
    const response = await fetch(`/api/users/favorite`, {
      method: 'POST',
      body: JSON.stringify({ symbol: search }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // if (response.ok) {
    //   document.location.replace('/profile');
    // } else {
    //   alert('Failed to create project');
    // }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

// front end fetch to backened for marquell goes here
//

async function listTickers(params) {
  const search = document.querySelector('#search-input').value.trim();
// const needed_funding = document.querySelector('#project-funding').value.trim();
// const description = document.querySelector('#project-desc').value.trim();

if (search) {
  const response = window.location = `/profile/?search=${search}` 
    
  let data = await response.json() 
 console.log(response)
 console.log(data)
//   if (response.ok) {
//     document.location.replace('/profile');
//   } else {
//     alert('Unknown Stock');
//   }
 }
}
 symbolButton.addEventListener('click', listTickers)
 favoriteButton.addEventListener('click', favoriteHandler)