from unicodedata import name


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(f'User: {self.name}, Balnce: ${self.account_balance}')
    
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.make_deposit(amount)


guido = User("Guido van Rossum", "guido@email.com")
chandler = User("Chandler Bing", "chandler@email.com")
joey = User("Joey Tribbiani", "joey@email.com")


guido.make_deposit(2000)
guido.make_deposit(500)
guido.make_deposit(1000)
guido.make_withdrawal(400)
guido.display_user_balance()

chandler.make_deposit(1500)
chandler.make_deposit(300)
chandler.make_withdrawal(100)
chandler.make_withdrawal(50)
chandler.display_user_balance()

joey.make_deposit(600)
joey.make_withdrawal(15)
joey.make_withdrawal(50)
joey.make_withdrawal(11)
joey.display_user_balance()

chandler.transfer_money(joey, 200)
chandler.display_user_balance()
joey.display_user_balance()
