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
        print(f'Balnce: ${self.balance}')
        return self

    def yield_interest(self):
        if self.balance>0:
            self.deposit(self.balance*self.int_rate)
        return self



account1 = BankAccount(0.01)
account2 = BankAccount(0.02)

account1.deposit(500).deposit(300).deposit(400).withdraw(150).yield_interest().display_account_info()
account2.deposit(600).withdraw(40).withdraw(70).withdraw(150).yield_interest().display_account_info()
