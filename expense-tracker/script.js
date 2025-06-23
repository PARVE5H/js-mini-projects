document.addEventListener("DOMContentLoaded",()=>{
const expenseForm=document.getElementById("expense-form");
const expenseNameInput=document.getElementById("expense-name");
const expenseAmountInput=document.getElementById("expense-amount");
const expenseList=document.getElementById("expense-list");
const totalAmountDisplay=document.getElementById("total-amount");
const invalidMsg=document.getElementById("invalid-msg");

let expenses=JSON.parse(localStorage.getItem('expenses')) ||[];

renderExpenses();
updateTotal();

expenseForm.addEventListener("submit",(e)=>{
    e.preventDefault();
        const name=expenseNameInput.value.trim();
        const amount=parseFloat(expenseAmountInput.value.trim());
        if(name!=="" && amount>0 && !isNaN(amount)){
            invalidMsg.classList.add("hidden");

        const newExpense={
            id:Date.now(),
            name,
            amount
        }
        expenses.push(newExpense);
        saveTOLocal();
        renderExpenses();
        updateTotal();
        expenseNameInput.value="";
        expenseAmountInput.value="";
    }else{
            expenseNameInput.value="";
            expenseAmountInput.value="";
            invalidMsg.classList.remove("hidden");
        }
});

function renderExpenses(){
     expenseList.innerHTML = "";
     expenses.forEach((expense) => {
        const li=document.createElement('li');
        li.innerHTML=`
        <span >${expense.name} -$${expense.amount}</span>
        <button data-id="${expense.id}">Delete</button>
        `;
        expenseList.appendChild(li);
    });

}
 expenseList.addEventListener("click",(e)=>{
    if(e.target.tagName ==="BUTTON"){
        const expenseId=parseInt(e.target.getAttribute("data-id"));
        expenses = expenses.filter((expense)=>expense.id !== expenseId );
        saveTOLocal();
        renderExpenses();
        updateTotal();
    }
 });

function saveTOLocal(){
    localStorage.setItem('expenses',JSON.stringify(expenses));
}
function updateTotal(){
    let totalAmount=expenses.reduce((sum,expense)=>sum+expense.amount,0);
    totalAmountDisplay.textContent=totalAmount;
}

})