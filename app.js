const reasonInput = document.querySelector("#input-reason");
const reasonAmount = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector("ion-alert-controller");

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = "";
  reasonAmount.value = "";
};

confirmBtn?.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = reasonAmount.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    alertCtrl
      .create({
        // create returns promise, which is fulfilled when the creation is done
        message: "Please enter valid reason and amount.",
        header: "Invalid inputs",
        buttons: ["Okay"],
      })
      .then((alertElement) => {
        alertElement.present();
      });
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": " + enteredAmount + " € ";

  expensesList.appendChild(newItem);
  console.log(enteredReason, reasonAmount.value);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses + " € ";
  clear();
});

cancelBtn.addEventListener("click", clear);
