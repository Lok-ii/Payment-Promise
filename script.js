let nameArray = [
  "Lokesh Kataria",
  "Jaiten Sahu",
  "Sakshi Thakre",
  "Virendra",
  "Mansi Sorathiya",
  "Abhay Chauhan",
];

let mainContainer = document.querySelector(".container");
let secondaryContainer = document.querySelector(".container1");

let userIcon = document.querySelector(".user-icon");
let money = document.querySelector("#money");
let receiver = document.querySelector(".name");
let payMoney = document.querySelector(".money");
let pay = document.querySelector(".pay");
let date = document.querySelector(".date");
let finalMoney = document.querySelector(".finalMoney");
let person = document.querySelector(".person");
let gotIt = document.querySelector(".got-it");
let paidTo = document.querySelector(".paidTo");

let randomName = nameArray[Math.floor(Math.random() * 6)];

userIcon.innerText = randomName[0];
receiver.innerText = randomName;
person.innerText = randomName;

money.addEventListener("input", () => {
  if (money.value === "") {
    payMoney.innerText = "0.00";
  }
  if (!(isNaN(parseInt(money.value)) || parseInt(money.value) <= 0)) {
    payMoney.innerText = money.value;
  }
  finalMoney.innerText = money.value;
  currentDate();
});

let paymentReq = () => {
  let payment = new Promise((resolve, reject) => {
    let amount = document.querySelector("#money");
    if (amount.value.length > 5) {
      reject();
    } else if (isNaN(parseInt(amount.value)) || parseInt(amount.value) <= 0) {
        money.value = "";
      alert("Please enter the valid amount.");
    } else if(amount.value.length <= 5) {
      resolve();
    }
  });

  payment
    .then(() => {
      mainContainer.classList.toggle("cont-two");
      mainContainer.innerHTML = `<video class="loading" src="./gpay.mp4" autoplay loop muted></video>`;

      setTimeout(() => {
        mainContainer.style.display = "none";
        secondaryContainer.style.display = "flex";
        mainContainer.classList.toggle("cont-two");
      }, 3000);
    })
    .catch(() => {
      mainContainer.classList.toggle("cont-two");
      mainContainer.innerHTML = `<video class="loading" src="./gpay.mp4" autoplay loop muted></video>`;

      let success = document.querySelector(".success");
    //   let failed = document.querySelector(".failed");

      setTimeout(() => {
        mainContainer.style.display = "none";
        secondaryContainer.style.display = "flex";
        mainContainer.classList.toggle("cont-two");
        success.src = "./animation_lo4lhksn_transparent.gif";
        success.style.width = "16rem";
        paidTo.innerHTML = `Payment Failed`;
      }, 3000);
    });
};

pay.addEventListener("click", paymentReq);

function currentDate() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  const indianTime = now.toLocaleTimeString("en-IN", options);
  const [hours, minutes, ampm] = indianTime.split(/:| /);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  date.innerText = `${
    month[now.getMonth()]
  } ${now.getDate()}, ${now.getFullYear()} ${hours}:${minutes} ${ampm}`;
}

gotIt.addEventListener("click", () => {
  location.reload();
});


window.onload = ()=>{
    alert("Enter amount less than ₹ 99,999 or else the payment will fail");
}