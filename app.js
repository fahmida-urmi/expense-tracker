document.getElementById('addExpenseBtn').addEventListener('click', addExpense);

let totalAmount = 0;

function addExpense() {
  const description = document.getElementById('expenseDescription').value;
  const amount = parseFloat(document.getElementById('expenseAmount').value);

  if (!description || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid description and amount.');
    return;
  }

  // Create a new expense item
  const expenseItem = document.createElement('li');
  expenseItem.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'border', 'border-gray-200', 'rounded');
  
  const expenseText = document.createElement('span');
  expenseText.textContent = `${description}: $${amount.toFixed(2)}`;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('text-red-500', 'hover:text-red-700');
  deleteButton.addEventListener('click', () => {
    totalAmount -= amount;
    updateTotalAmount();
    expenseItem.remove();
  });

  expenseItem.appendChild(expenseText);
  expenseItem.appendChild(deleteButton);

  // Append the new expense item to the list
  document.getElementById('expenseList').appendChild(expenseItem);

  // Update total amount
  totalAmount += amount;
  updateTotalAmount();

  // Clear input fields
  document.getElementById('expenseDescription').value = '';
  document.getElementById('expenseAmount').value = '';
}

function updateTotalAmount() {
  document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}
