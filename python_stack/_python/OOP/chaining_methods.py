from unicodedata import name


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f'User: {self.name}, Balnce: ${self.account_balance}')
        return self
    
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.make_deposit(amount)
        return self


guido = User("Guido van Rossum", "guido@email.com")

guido.make_deposit(2000).make_deposit(500).make_deposit(1000).make_withdrawal(400).display_user_balance()