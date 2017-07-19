function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.add = function() {
  return this.balance += deposit;
}

Account.prototype.subtract = function() {
  return this.balance -= withdrawal;
}

var deposit;
var withdrawal;
var newAccount;

$(document).ready(function() {
  $("form#initial-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#new-name").val();
    var inputtedBalance = parseInt($("#initial-deposit").val());
    newAccount = new Account(inputtedName, inputtedBalance);

    $(".bank-balance").text(newAccount.balance);

    $("#new-name").val("");
    $("#initial-deposit").val(0);
  });

  $("#deposit-form").submit(function(event) {
    event.preventDefault();

    deposit = parseInt($("#deposit").val());
    newAccount.balance = newAccount.add();

    $(".bank-balance").text(newAccount.balance);

    $("#deposit").val(0);
  });

  $("#withdrawal-form").submit(function(event) {
    event.preventDefault();

    withdrawal = parseInt($("#withdrawal").val());
    newAccount.balance = newAccount.subtract();

    $(".bank-balance").text(newAccount.balance);

    $("#withdrawal").val(0);
  });
});
