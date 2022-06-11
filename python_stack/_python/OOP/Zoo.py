class Animal:
    def __init__(self, name, happy, health):
        self.name = name
        self.happy = happy
        self.health = health
    def feed(self):
        raise NotImplementedError
    def display_info(self):
        print(f"Nmae: {self.name} - Happiness: {self.happy} - Health: {self.health}")

class Lion(Animal):
    def __init__(self, name):
        super().__init__(name, happy=30, health=80)
    def feed(self):
        self.happy += 5
        self.health += 5
        return self

class Tiger(Animal):
    def __init__(self, name):
        super().__init__(name, happy=50, health=90)
    def feed(self):
        self.happy += 6
        self.health += 6
        return self


class Bear(Animal):
    def __init__(self, name):
        self.isSleep = False
        super().__init__(name, happy=60, health=70)
    def feed(self):
        self.happy += 4
        self.health += 4
        return self
    def sleep(self, isSleep):
        self.isSleep = isSleep
        return self
    def display_info(self):
        print(f"Nmae: {self.name} - Happiness: {self.happy} - Health: {self.health} - State: {'Sleep' if self.isSleep else 'Awake'}")

bella = Bear("Bella")
bella.display_info()
bella.feed().sleep(True).display_info()

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    def add_lion(self, name):
        self.animals.append( Lion(name) )
    def add_tiger(self, name):
        self.animals.append( Tiger(name) )
    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()

zoo1 = Zoo("John's Zoo")
zoo1.add_lion("Nala")
zoo1.add_lion("Simba")
zoo1.add_tiger("Rajah")
zoo1.add_tiger("Shere Khan")
zoo1.print_all_info()

