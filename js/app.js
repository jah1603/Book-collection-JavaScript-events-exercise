document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const textInput = document.querySelector('#title');
  textInput.addEventListener('input', (event) => {
    const resultText = document.querySelector('#title-result')
    resultText.textContent = `You typed ${event.target.value}.`;
  })
})
