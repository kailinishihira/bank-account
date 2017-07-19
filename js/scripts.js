function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.add = function (deposit) {
  return this.balance += deposit
}

Account.prototype.subtrace = function (withdrawal) {
  return this.balance += withdrawal
}

var runningBalance;

$(document).ready(function() {
  $("form#intial-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#new-name").val();
    var inputtedBalance = parseInt($("#initial-deposit").val());
    var newAccount = new Acccount(inputtedName, inputtedBalance);
    runningBalance = newAccount.balance;

    $(".bank-balance").text(runningBalance);

    $("#new-name").val("");
    ("#initial-deposit").val("");
  });

  $("#deposit-form").submit(function(event) {
    event.preventDefault();

    var inputtedDeposit = parseInt($("#deposit").val());
    runningBalance = newAccount.add(inputtedDeposit);

    $(".bank-balance").text(runningBalance);

    $("#deposit").val("");
  });

  $("#withdrawal-form").submit(function(event) {
    event.preventDefault();

    var inputtedDeposit = parseInt($("#withdrawal").val());
    runningBalance = newAccount.subtract(inputtedWithdrawal);

    $(".bank-balance").text(runningBalance);

    $("#withdrawal").val("");
  });
});
