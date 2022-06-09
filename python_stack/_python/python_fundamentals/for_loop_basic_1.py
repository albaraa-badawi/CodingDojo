#Basic
for i in range(151):
    print(i)

#Multiples of 5
for i in range(1,201):
    print(i*5)

#Counting
for i in range(101):
    if i%10==0:
        print("CodingDojo")
        continue
    if i%5==0:
        print("Coding")

#Whoa. That Sucker's Huge
sum = 0
for i in range(500000):
    if i%2==1:
        sum+=i
print(sum)

#Countdown by Fours
for i in range(2018,0,-4):
    print(i)

#Flexible Counter
lowNum = int(input("input low number: "))
highNum = int(input("input high number: "))
mult = int(input("input mult number: "))
for i in range(lowNum, highNum+1):
    if i%mult==0:
        print(i)