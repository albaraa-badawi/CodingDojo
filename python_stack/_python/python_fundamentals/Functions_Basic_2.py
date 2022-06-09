def countdown(num):
    lst = []
    for i in range(num, -1, -1):
        lst.append(i)
    return lst

def print_and_return(lst):
    print(lst[0])
    return lst[1]

def first_plus_length(lst):
    return len(lst)+lst[0]

def values_greater_than_second(lst):
    nlst = []
    if len(lst)<2:
        return False
    for i in lst:
        if i>lst[1]:
            nlst.append(i)
    return nlst

def length_and_value(len, val):
    return [val]*len
