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

let money = document.querySelector("#money");
let receiver = document.querySelector(".name");
let payMoney = document.querySelector(".money");
let pay = document.querySelector(".pay");
let date = document.querySelector(".date");
let finalMoney = document.querySelector(".finalMoney");
let person = document.querySelector(".person");

let randomName = nameArray[Math.floor(Math.random() * 6)];

receiver.innerText = randomName;
person.innerText = randomName;

money.addEventListener("input", ()=>{
    if (
        !(isNaN(parseInt(money.value)) ||
        parseInt(money.value) <= 0)
      ){
        payMoney.innerText = money.value;
      }

      if(money.value === ""){
        payMoney.innerText = "0.00";
      }

      currentDate();
})

let paymentReq = () => {
  let payment = new Promise((resolve, reject) => {
    if (
      isNaN(parseInt(money.value)) ||
      parseInt(money.value) <= 0 ||
      money.value === ""
    ) {
      reject();
    } else {
      resolve();
    }
  });

  payment
    .then(() => {
        mainContainer.classList.toggle("cont-two");
      mainContainer.innerHTML = `<video class="loading" src="./gpay.mp4" autoplay loop muted></video>`;

      setTimeout(() => {
        mainContainer.style.display = "none";
        secondaryContainer.style.display = "flex"
        mainContainer.classList.toggle("cont-two");
      }, 3000);
    })
    .catch(() => {
      alert("Please enter a valid amount");
    });
};

pay.addEventListener("click", paymentReq);


function currentDate(){
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' };
    const indianTime = now.toLocaleTimeString('en-IN', options);
    const [hours, minutes, ampm] = indianTime.split(/:| /);

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    date.innerText = `${month[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} ${hours}:${minutes} ${ampm}`;
}

currentDate();