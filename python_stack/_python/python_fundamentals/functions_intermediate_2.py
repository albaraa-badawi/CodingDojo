#Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print(x)

students[0]['last_name'] = 'Bryant'
print(students)

sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

z[0]['y'] = 30
print(z)

###################################################################
print("--------------------------------------------------------")

#Iterate Through a List of Dictionaries
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(students):
    for name in students:
        lst = []
        for key, value in name.items():
            lst.append([key, " - ", value, ", "])
        lst[-1].pop()
        result = ["".join(item) for item in lst]
        print("".join(result))

iterateDictionary(students)

###################################################################
print("--------------------------------------------------------")

#Get Values From a List of Dictionaries
def iterateDictionary2(key_name, some_list):
    for dic in some_list:
        print(dic[key_name])

iterateDictionary2('first_name', students)

###################################################################
print("--------------------------------------------------------")


#Iterate Through a Dictionary with List Values
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dic):
    for key, value in dic.items():
        print(len(value), key.upper())
        for item in value:
            print(item)
        print()

printInfo(dojo)
