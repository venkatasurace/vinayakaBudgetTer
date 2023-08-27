const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let sessionId = "";

const commitNumberData = [
  { name: "A Ashok", amount: 2000, cat: "Sr" },
  { name: "P Mahesh", amount: 2000, cat: "Sr" },
  { name: "B Rajesh", amount: 2000, cat: "Sr" },
  { name: "A Mouli", amount: 2000, cat: "Sr" },
  { name: "P Rakesh", amount: 2000, cat: "Sr" },
  { name: "A Madhu", amount: 2000, cat: "Sr" },
  { name: "D Venkata Suresh", amount: 2000, cat: "Sr" },
  { name: "G Narender", amount: 2000, cat: "Sr" },
  { name: "Rajesh (plumber)", amount: 2000, cat: "Sr" },
  { name: "A Nanda", amount: 2000, cat: "Sr" },
  { name: "A Appala naidu", amount: 2000, cat: "Sr" },
  { name: "P Pramesh", amount: 2000, cat: "Sr" },
  { name: "Mohan", amount: 1000, cat: "Sr" },
  { name: "P Ganesh", amount: 2000, cat: "Sr" },
  { name: "K Siva kumar", amount: 2000, cat: "Sr" },
  { name: "B Muthyalu", amount: 2000, cat: "Sr" },
  { name: "p Ganapathi", amount: "idol", cat: "Sr" },
  { name: "P shyam", amount: 1000, cat: "Jr" },
  { name: "Gopi", amount: 1000, cat: "Jr" },
  { name: "Bhargav", amount: 1000, cat: "Jr" },
  { name: "Karthik", amount: 1000, cat: "Jr" },
  { name: "Santosh", amount: 1000, cat: "Jr" },
  { name: "P Ganasai", amount: 1000, cat: "Jr" },
  { name: "P Teja", amount: 1000, cat: "Jr" },
  { name: "P Siva", amount: 1000, cat: "Jr" },
  { name: "Chandra", amount: 1000, cat: "Jr" },
];

app.addEventListener("keypress", async function (event) {
  const value = document.querySelector("input").value;
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "#user";
  span1.textContent = " in";
  span2.textContent = " ~/Nyss/root";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function createText(text, className) {
  const p = document.createElement("p");

  p.setAttribute("class", text.includes("<a") ? "link" : "");
  p.className = className ? `${p.className} ${className}` : p.className;
  setTimeout(() => {
    p.className = p.className.includes("typing-text")
      ? p.className.replace("typing-text", "")
      : p.className;
  }, 3000);
  p.innerHTML = text;
  app.appendChild(p);
}

async function commitNumAll() {
  createSpan("Loading.");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  await Promise.all(
    commitNumberData.map(async (item) => {
      createText(`${item.name} (${item.cat})`);
    })
  );
  removeInput();
  await delay(150);
  new_line();
}

async function amountData(value) {
  const lowerValue = value.toLowerCase();
  createSpan("Loading.");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  filterAmount = commitNumberData.filter((item) =>
    item.name.toLowerCase().includes(lowerValue)
  );
  createText(`${value} : ${filterAmount[0]?.amount} `);
  removeInput();
  await delay(150);
  new_line();
}

//open_terminal ok
async function open_terminal() {
  await delay(200);
  createText("NYSS'Terminal welcomes To all!!!", "typing-text");
  await delay(3000);
  createText("This is a terminal version of Nyss budget.", "typing-text");
  await delay(3000);
  createText(
    "For more detailed information, you can visit: <a href='https://nyss.netlify.app/' target='_blank'>https://Nyss.com/</a>",
    "typing-text"
  );
  await delay(3000);
  createText("");
  await delay(700);
  createSpan("Creating a Session");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  let ip = {};
  let response = {};
  if (localStorage.getItem("ip") === null) {
    response = await fetch(
      `https://ipinfo.io?token=6744bd6f45089d`,
      function (data) {
        return data;
      }
    );
    ip = await response.json();
    localStorage.setItem("ip", JSON.stringify(ip));
  } else {
    response = { status: 200 };
    ip = JSON.parse(localStorage.getItem("ip"));
  }
  if (response.status === 200) {
    // console.log(ip);
    sessionId = `${ip.loc.split(",")[0]}.${ip.loc.split(",")[1]}.${Math.floor(
      100 + Math.random() * 900
    )}`;
    createText(
      `Session Created. Your IP is: <span class="ip">${ip.ip}</span>`,
      "typing-text"
    );
    await delay(3000);
    createText(
      `Session ID is: <span class="ip">${sessionId}</span>`,
      "typing-text"
    );
    await delay(3000);
  } else {
    sessionId = `${Math.floor(1000 + Math.random() * 9000)}.89.${Math.floor(
      1000 + Math.random() * 9000
    )}.686`;
    createText(
      `Session Created. Your Session ID is: ${sessionId}`,
      "typing-text"
    );
    await delay(3000);
  }
  await delay(1500);

  createText("You can run several commands:");
  createText(
    `<span class="help-command">help</span> <span class="help-icon">~</span> <span style="font-size: 18px">See all commands.</span>`
  );
  createText(
    `<span class="help-command">commit -Nu</span> <span class="help-icon">~</span> <span style="font-size: 18px">To show all commit members</span>`
  );
  createText(
    `<span class="help-command">idol -d</span> <span class="help-icon">~</span> <span style="font-size: 18px">What cost of idol and idol Sponsor name.</span>`
  );
  createText(
    `<span class="help-command">events -d</span> <span class="help-icon">~</span> <span style="font-size: 18px">events information.</span>`
  );

  await delay(500);
  new_line();
}

// new_line ok

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  console.log(value);
  const name = value.split(" ");
  if (value === "help") {
    trueValue(value);
    createText(
      `<span class="help-command">commit -Nu</span> <span class="help-icon">~</span> <span style="font-size: 18px">To get all commit members ;)</span>`
    );
    createText(
      `<span class="help-command">idol d</span> <span class="help-icon">~</span> <span style="font-size: 18px">Who idol sponsor name.</span>`
    );
    createText(
      `<span class="help-command">events -d</year></span> <span class="help-icon">~</span> <span style="font-size: 18px">To get events conducted at that year.</span>`
    );
    createText(
      `<span class="help-command">budget -{any}</span> <span class="help-icon">~</span> <span style="font-size: 18px">show cost of particular item</span>`
    );
    createText(
      `<span class="help-command">contact</span> <span class="help-icon">~</span> <span style="font-size: 18px">To get my NYSS organisation details.</span>`
    );
    createText(
      `<span class="help-command">name -h</name></span> <span class="help-icon">~</span> <span style="font-size: 18px">To show donation amount.</span>`
    );
    createText(
      `<span class="help-command">cls</span> <span class="help-icon">~</span> <span style="font-size: 18px">Clean the terminal.</span>`
    );
    createText(
      `<span class="help-command">exit</span> <span class="help-icon">~</span> <span style="font-size: 18px">Exit the terminal.</span>`
    );
  } else if (value === "commit -Nu") {
    await commitNumAll();
  } else if (value === "idol -d") {
    trueValue(value);
    createText(`Hi, I am <span class="coral">Name</span>. soo on.`);
    createText(
      `I sponsor lod Ganesh idol, the cost of idol <span style="font-size: 18px">RS 8000</span>`
    );
  } else if (value === "events -d") {
    // ? Command >> "social -a"
    trueValue(value);
    createText("Annasantarpana");
    createText("children's games");
  } else if (name[1] === "-h") {
    // ? Command >> "social -twitter"

    console.log(name[0], name[1]);
    await amountData(name[0]);
  } else if (value === "cls") {
    // ? Command >> "cls"
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("span")
      .forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else if (value === "contact") {
    trueValue(value);
    createText(
      "Call me at: <a href='tel:+918125470490' target='_blank'>+91 8125-470-490</a>"
    );
    createText("Mail me at: <a href='' target='_blank'>Nyss@gmail.com</a>");
  } else if (value === "exit") {
    // ? Command >> "exit"
    await delay(600);
    createSpan("Ending the Session", sessionId);
    await delay(600);
    createSpan(".");
    await delay(600);
    createSpan(".");
    await delay(600);
    createSpan(".");
    await delay(600);
    createSpan(".");
    await delay(600);
    createSpan(".");
    await delay(800);
    createSpan(".");
    await delay(800);
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("span")
      .forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
    createText(`Session Ended.`);
    createText(`Thank you for using this terminal 😊`);
    createText(
      `Pls do Comeback or just reload now itself to interact with me again. Bye! 👋`
    );
    removeInput();
  } else {
    falseValue(value);
    createText(`Command not found: <span class="help-command">${value}</span>`);
    createText(
      `As this is a terminal, commands are case sensitive and should only be written in lowercase. Please try again.`
    );
    createText(
      `Try typing <span class="help-command">help</span> to see the list of commands.`
    );
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createSpan(text, className) {
  const span = document.createElement("span");

  span.innerHTML = text;
  app.appendChild(span);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
