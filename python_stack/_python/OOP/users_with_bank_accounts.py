class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = []
        self.accounts.append(BankAccount(int_rate=0.02, balance=0))
    
    def create_account(self):
        self.accounts.append(BankAccount(int_rate=0.02, balance=0))
        return self

    def make_deposit(self, amount, account_num=0):
        self.accounts[account_num].deposit(amount)
        return self

    def make_withdrawal(self, amount, account_num=0):
        self.accounts[account_num].withdraw(amount)
        return self

    def display_user_balance(self, account_num=0):
        print(f'User: {self.name}, {self.accounts[account_num].display_account_info()}')
        return self
    
    def transfer_money(self, other_user, amount, send_account_num=0, rec_account_num=0):
        self.accounts[send_account_num].withdraw(amount)
        other_user.accounts[rec_account_num].deposit(amount)
        return self

class BankAccount:
    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        return f'Balnce: ${self.balance}'

    def yield_interest(self):
        if self.balance>0:
            self.deposit(self.balance*self.int_rate)
        return self


guido = User("Guido van Rossum", "guido@email.com")
chandler = User("Chandler Bing", "chandler@email.com")
joey = User("Joey Tribbiani", "joey@email.com")


guido.make_deposit(2000).make_deposit(500).make_deposit(1000).make_withdrawal(400).display_user_balance()
guido.create_account().make_deposit(200, account_num=1).make_deposit(600, account_num=1).make_deposit(1300, account_num=1).make_withdrawal(400, account_num=1).display_user_balance(account_num=1)

chandler.make_deposit(1500).make_deposit(300).make_withdrawal(100).make_withdrawal(50).display_user_balance()

joey.make_deposit(600).make_withdrawal(15).make_withdrawal(50).make_withdrawal(11).display_user_balance()

chandler.transfer_money(joey, 200)
chandler.display_user_balance()
joey.display_user_balance()