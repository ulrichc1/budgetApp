
const amountInput = document.getElementById("number");
const addForm = document.getElementById("addForm");
const budgetAmount = document.getElementById("budgetAmount");
const balanceAmount = document.getElementById("balanceAmount");
const changePlaceBalance = document.getElementsByClassName('amountbala');
var budgetShow = document.getElementsByClassName("bdgt");

const editForm = document.getElementById("editForm");
const saveEdit = document.getElementById("saveEdit");
const editExpValue = document.getElementById("editExpValue");
const editExpNumber = document.getElementById("editExpNumber");

const expForm = document.getElementById("expForm");
const expensesAmount = document.getElementById("expensesAmount");
const expValue = document.getElementById("expValue");
const displayExpenses = document.getElementById("displayExpenses");
const expenseForm = document.getElementById("expense-form");
const budgetform = document.getElementById("budgetform");

let expName = document.getElementById("expName");
let expNumber = document.getElementById("expNumber");
let id = 0;
let details = [];

var alreadyPlaced = false;
var alreadyPlacedB =false;
function aFocus(monChamp)
{
document.getElementById(monChamp).focus();
};

function displayExp(details) {
    expValue.innerHTML = null;
    for (i = 0; i < details.length; i++) {
      expValue.innerHTML += `
      <div class="expValue" id="${details[i].id}">
        <div id="expTitleName" class="exp"><p>${details[i].name}</p></div>
        <div id="expValueAmount" class="exp"><p> <span>$ </span> ${details[i].number}</p></div>
        <div id="edite_delete">
          <p>
            <button id="${details[i].id}" onclick="editExpDetails(${details[i].id})"> <img src="edit.png" width="20" alt=""  /></button> 
            <button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})"><img src="trash.png" width="20" alt="" /></button>
          </p>
        </div>
      </div>
    `;
    }
    calcExpenses();
    displayExpenses.style.display = "block";
  }

function getBudgetAmount(amount) {
  if (!amount) {
    amountInput.style.border = "1px solid #b80c09";
    amountInput.placeholder = "Please enter an amount";

    setTimeout(() => {
      amountInput.style.border = "1px solid gray";
    }, 3000);
}
    else if (amount < 0 || amount > 999999999999){
        amountInput.style.border = "1px solid #b80c09";
        alert("Enter a valid amount. (Between 0 & 999 Billion)");
        
        }

   else {
    alreadyPlacedB =true;
    if (alreadyPlaced){
        {
            for(const classes of budgetShow){
                classes.classList.remove(
                    "budgetAmountToShow",
                    "budgetAmountToShowDix",
                    "budgetAmountToShowCent",
                    "budgetAmountToShowMil",
                    "budgetAmountToShowDixMil",
                    "budgetAmountToShowCentMil",
                    "budgetAmountToShowMillion",
                    "budgetAmountToShowDixMillion",
                    "budgetAmountToShowCentMillion",
                    "budgetAmountToShowBillion",
                    "budgetAmountToShowTenBillion",
                    "budgetAmountToShowCentBillion"                    
                    );
            }
          }
        }
    budgetAmount.innerText = amount;
    balanceAmount.innerText = amount;
    expenseForm.style.display = "block";
    budgetform.style.display = "none";
    editForm.style.display = "none";
    amountInput.value = "";
    aFocus("expName");
    updateBalance();
    for(i=0;i<budgetShow.length;i++){
        budgetShow[i].classList.remove("budgetAmountToHide");
    };
    alreadyPlaced =true;
    if(amount >= 0 && amount < 10)
    for(const elts of budgetShow){
        elts.classList.add("budgetAmountToShow");
    }
    else if (amount >= 10 && amount < 100){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowDix");
        }
    }
    else if (amount >= 100 && amount < 1000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowCent");
        }
    }
    else if (amount >= 1000 && amount < 10000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowMil");
        }
    }
    else if (amount >= 10000 && amount < 100000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowDixMil");
        }
    }
    else if (amount >= 100000 && amount < 1000000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowCentMil");
        }
    }
    else if (amount >= 100000 && amount < 1000000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowCentMil");
        }
    }
    else if (amount >= 100000 && amount < 1000000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowCentMil");
        }
    }
    else if (amount >= 1000000 && amount < 10000000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowMillion");
        }
    }
    else if (amount >= 10000000 && amount < 100000000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowDixMillion");
        }
    }
    else if (amount >= 100000000 && amount < 1000000000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowCentMillion");
        }
    }
    else if (amount >= 1000000000 && amount < 10000000000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowBillion");
        }
    }
    else if (amount >= 10000000000 && amount < 100000000000){
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowTenBillion");
        }
    }
    else{
        for(const elts of budgetShow){
            elts.classList.add("budgetAmountToShowCentBillion");
        }
    };
    
    }
  }





  


function addExpenses(name, number) {
  if (!name.length || !number.length) {
    expName.style.border = "1px solid #b80c09";
    expName.placeholder = "Please enter a name";

    expNumber.style.border = "1px solid #b80c09";
    expNumber.placeholder = "Please enter an amount";


    setTimeout(() => {
      expName.style.border = "1px solid gray";
      expName.placeholder = "Please enter a name";

      expNumber.placeholder = "Please enter an amount";
      expNumber.style.border = "1px solid gray";

    }, 3000);
  } 
  else if (parseInt(number) < 0 || parseInt(number) > 999999999999){
    expNumber.style.border = "1px solid #b80c09";
    alert("Enter a valid amount. (Between 0 & 999 Billion)");
    
    }
    else {
    const userExp = {
      id: id,
      name: name,
      number: parseInt(number),
    };
    details.push(userExp);
    displayExp(details);
    id++;
    expName.value = "";
    expNumber.value = "";
    window.scrollTo({
        top: 760,behavior: 'smooth',})
  }
}



function calcExpenses() {
  let totalExp = 0;
  for (i = 0; i < details.length; i++) {
    totalExp = details[i].number + totalExp;
  }
  expensesAmount.innerText = totalExp;
  updateBalance();
}

function updateBalance() {
  var blnce = parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
  balanceAmount.innerText =
    parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
    if (alreadyPlaced){
        {
            for(const classes of changePlaceBalance){
                classes.classList.remove(
                    "balanceAmountToShow",
                    "balanceAmountToShowDix",
                    "balanceAmountToShowCent",
                    "balanceAmountToShowMil",
                    "balanceAmountToShowDixMil",
                    "balanceAmountToShowCentMil",
                    "balanceAmountToShowMillion",
                    "balanceAmountToShowDixMillion",
                    "balanceAmountToShowCentMillion",
                    "balanceAmountToShowBillion",
                    "balanceAmountToShowTenBillion",
                    "balanceAmountToShowCentBillion"                    
                    );
                alreadyPlaced =true;
            }
          }
    }
    if( blnce >= 0 && blnce < 10)
    for(const balances of changePlaceBalance){
        balances.classList.add("balanceAmountToShow");
        alreadyPlaced =true;
    }
    else if (blnce < 0 && blnce > -10 || blnce >= 10 && blnce < 100){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowDix");
            alreadyPlaced =true;
        }
    }
    else if (blnce <= -10 && blnce > -100  || blnce >= 100 && blnce < 1000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowCent");
            alreadyPlaced =true;
        }
    }
    else if (blnce <= -100 && blnce > -1000 || blnce >= 1000 && blnce < 10000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowMil");
            alreadyPlaced =true;
        }
    }
    else if (blnce <= -1000 && blnce > -10000 || blnce >= 10000 && blnce < 100000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowDixMil");
            alreadyPlaced =true;
        }
    }
    else if ( blnce <= -10000 && blnce > -100000 || blnce >= 100000 && blnce < 1000000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowCentMil");
            alreadyPlaced =true;
        }
    }
    else if (blnce <= -100000 && blnce > -1000000  || blnce >= 1000000 && blnce < 10000000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowMillion");
            alreadyPlaced =true;
        }
    }
    else if (blnce <= -1000000 && blnce > -10000000 || blnce >= 10000000 && blnce < 100000000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowDixMillion");
            alreadyPlaced =true;
        }
    }
    else if (blnce <= -10000000 && blnce > -100000000  || blnce >= 100000000 && blnce < 1000000000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowCentMillion");
            alreadyPlaced =true;
        }
    }
    else if ( blnce <= -100000000 && blnce > -1000000000 || blnce >= 1000000000 && blnce < 10000000000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowBillion");
            alreadyPlaced =true;
        }
    }
    else if (blnce <= -1000000000 && blnce > -10000000000 || blnce >= 10000000000 && blnce < 100000000000){
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowTenBillion");
            alreadyPlaced =true;
        }
    }
    else{
        for(const balances of changePlaceBalance){
            balances.classList.add("balanceAmountToShowCentBillion");
            alreadyPlaced =true;
        }
}
}

function delExpenseDetails(id) {
  let index = details.findIndex((item) => item.id === id);
  details.splice(index, 1);
  displayExp(details);
}

function editExpDetails(id) {
  editForm.style.display = "block";
  details.findIndex((item) => {
    if (item.id === id) {
      editExpName.value = item.name;
      editExpNumber.value = item.number;
      saveEdit.children[2].id = item.id;
    }
  });
}

function getExpValue(editExpName, editExpNumber, id) {
  edited = details.findIndex((obj) => obj.id == id);
  details[edited].name = editExpName;
  details[edited].number = parseInt(editExpNumber);
  displayExp(details);
}

function callBudget() {
  budgetform.style.display = "block";
  expenseForm.style.display = "none";
}

saveEdit.addEventListener("submit", (e) => {
  e.preventDefault();
  getExpValue(editExpName.value, editExpNumber.value, saveEdit.children[2].id);
});

expForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addExpenses(expName.value, expNumber.value);
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getBudgetAmount(amountInput.value);
});

$('body').append('<div class="loadingPage"> <div id="chargement"> </div> </div>');
$(window).on('load', function(){
    window.scrollTo({
        top: 450,behavior: 'smooth',})
  setTimeout(removeLoader, 800); //wait for page load PLUS two seconds.
});
function removeLoader(){
    window.scrollTo({
        top: 0, behavior:'smooth'});
    $( "#chargement" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#chargement" ).remove();
       //makes page more lightweight 
    
  });  
  $( ".loadingPage" ).fadeOut(700, function() {
    // fadeOut complete. Remove the loading div
    $( ".loadingPage" ).remove();
     //makes page more lightweight 
     
});
}

