// Business Logic -->

var balance;

function Account(name, balance) {
  this.accountName = name;
  this.balance = balance;
}


Account.prototype.deposit = function() {
  this.balance += this.deposit;
  return this.balance;
}

Account.prototype.withdrawal = function() {
  this.balance -= this.withdrawal;
  return this.balance;
}

// UI Logic -->
$(function(){
  $("form#initial-form").submit(function(event){
    event.preventDefault();
    debugger;

    var name = $("#new-name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    var newAccount = new Account(name, initialDeposit);
    balance = initialDeposit;
    $(".current-name").text(newAccount.name);
    $(".current-bal").text(newAccount.balance);

  });

  $("form#transaction-form").submit(function(event){
    event.preventDefault();

    var depositValue = parseInt($("#deposit").val());
    var withdrawalValue = parseInt($("#withdrawal").val());

    var newTransaction = new Transaction(depositValue)

  })
});
