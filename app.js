const reasonInput = document.querySelector("#input-reason");
const reasonAmount = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");

confirmBtn?.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = reasonAmount.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": " + enteredAmount + " € ";

  expensesList.appendChild(newItem);
  console.log(enteredReason, reasonAmount.value);
});

cancelBtn.addEventListener("click", () => {
  reasonInput.value = "";
  reasonAmount.value = "";
});
