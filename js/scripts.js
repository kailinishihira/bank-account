// Business Logic -->

var balance;

function Account(name, balance) {
  this.accountName = name;
  this.balance = balance;
}


Account.prototype.deposit = function() {
  this.balance = this.balance + this.deposit;
  return this.balance;
}

Account.prototype.withdrawal = function() {
  this.balance = this.balance - this.withdrawal;
  return this.balance;
}

// UI Logic -->
$(function(){
  $("#initial-form").submit(function(event){
    event.preventDefault();
    debugger;

    var name = $("#new-name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    var newAccount = new Account(name, initialDeposit);
    $(".current-bal").text(newAccount.initialDeposit);


  });

  $("#transaction-form").submit(function(event){
    event.preventDefault();

    var depositValue = parseInt($("#deposit").val());
    var withdrawalValue = parseInt($("#withdrawal").val());

    var newTransaction = new Transaction(depositValue)

  })
});
