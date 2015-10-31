var events = require('events');

function Account(){
    this.balance = 0;

    //inherit event.EventEmitter step 1
    events.EventEmitter.call(this);

    this.deposit = function(amount){
        this.balance += amount;
        this.emit('balanceChanged');
    }

    this.withdraw = function(amount){
        this.balance -= amount;
        this.emit('balanceChanged');
    }
}
//inherit event.EventEmitter step 2
Account.prototype.__proto__ = events.EventEmitter.prototype;

// 3 callback functions
function displayBalance(){
    console.log("Account Balance is: $%d", this.balance);
}
function checkOverDraw(){
    if (this.balance < 0)
        console.log('Account Overdraw');
}
function checkGoal(acc, goal){
    if (acc.balance > goal)
        console.log('Goal Achieved');
}

// some test about Account class
var account = new Account();
account.on('balanceChanged', displayBalance)
.on('balanceChanged', checkOverDraw)
.on('balanceChanged', function(){
    checkGoal(this, 1000);
});

account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);
