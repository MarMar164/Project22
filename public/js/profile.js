const submitButton = document.querySelector("#submit");

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
 submitButton.addEventListener('click', listTickers)