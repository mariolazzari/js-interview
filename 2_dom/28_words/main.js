// Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
const p = document.querySelector("p");
p.innerHTML = p.innerHTML
  .split(" ")
  .map(word =>
    word.length > 8
      ? `<span style="background-color:yellow; font-weight:bold; padding:2px 4px;">${word}</span>`
      : word
  )
  .join(" ");
