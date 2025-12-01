// Add a link back to the source of the text after the paragraph tag.(https://forcemipsum.com/)
const link = document.createElement("a");
link.href = "https://mariolazzari.it";
link.innerText = "Mario Lazzari";
link.target = "_blank";

document.body.appendChild(link);
