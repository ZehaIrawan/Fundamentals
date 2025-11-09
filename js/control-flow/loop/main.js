// 10. For a list of HTML elements, attach a click event to each:


const buttons = document.querySelectorAll("button");

buttons.forEach((item,index) => {
  item.addEventListener('click', () => console.log(`clicked ${index}`))
})