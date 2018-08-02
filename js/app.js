document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const textInput = document.querySelector('#title');
  textInput.addEventListener('input', (event) => {
    const resultText = document.querySelector('#title-result')
    resultText.textContent = `You typed ${event.target.value}.`;
  })

  const authorInput = document.querySelector('#author');
  authorInput.addEventListener('input', (event) =>{
    const resultAuthor = document.querySelector('#author-result')
    resultAuthor.textContent = `You typed ${event.target.value}.`
  });

  const selectCategory = document.querySelector('#category');
  selectCategory.addEventListener('change', (event) => {
    const chosenCategory = document.querySelector('#selection-result')
    chosenCategory.textContent = `You opted for ${event.target.value}.`
  })

  const formInput = document.querySelector('#form');
  formInput.addEventListener('submit', (event) => {
    event.preventDefault();

    const formDetails = document.querySelector('#form-result')
    formDetails.textContent = `You stored ${event.target.title.value}, a ${event.target.category.value} by ${event.target.author.value}`;
  });

})
