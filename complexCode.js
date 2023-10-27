/* file: complexCode.js */
/* This code is a simulation of a banking system */

class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.accounts = [];
    this.transactions = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  createAccount(customer, initialBalance = 0) {
    const account = new BankAccount(customer, initialBalance);
    customer.addAccount(account);
    this.accounts.push(account);
    this.transactions.push(`Account ${account.number} created with initial balance of ${initialBalance}`);
  }

  deposit(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    account.deposit(amount);
    this.transactions.push(`Deposited ${amount} into account ${account.number}`);
  }

  withdraw(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    account.withdraw(amount);
    this.transactions.push(`Withdrawn ${amount} from account ${account.number}`);
  }

  transfer(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.findAccount(fromAccountNumber);
    const toAccount = this.findAccount(toAccountNumber);
    fromAccount.withdraw(amount);
    toAccount.deposit(amount);
    this.transactions.push(`Transferred ${amount} from account ${fromAccountNumber} to account ${toAccountNumber}`);
  }

  findAccount(accountNumber) {
    const account = this.accounts.find(acc => acc.number === accountNumber);
    if (!account) {
      throw new Error(`Account ${accountNumber} not found`);
    }
    return account;
  }

  viewTransactions() {
    this.transactions.forEach(transaction => {
      console.log(transaction);
    });
  }
}

class Customer {
  constructor(name, address, phoneNumber) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }
}

class BankAccount {
  static lastAccountNumber = 0;

  constructor(customer, balance = 0) {
    BankAccount.lastAccountNumber++;
    this.number = BankAccount.lastAccountNumber;
    this.customer = customer;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error(`Insufficient balance in account ${this.number}`);
    }
  }
}

// Usage example
const bank = new Bank("MyBank");

const customer1 = new Customer("John Doe", "123 Main St", "555-1234");
const customer2 = new Customer("Jane Smith", "456 Elm St", "555-5678");

bank.addCustomer(customer1);
bank.addCustomer(customer2);

bank.createAccount(customer1, 1000);
bank.createAccount(customer2, 500);

bank.deposit(1, 500);
bank.withdraw(2, 200);
bank.transfer(2, 1, 300);

bank.viewTransactions();