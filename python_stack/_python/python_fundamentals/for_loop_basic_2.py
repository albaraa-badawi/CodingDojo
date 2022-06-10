def biggie_size(lst):
    output = []
    for i in lst:
        if i>0:
            output.append("big")
        else:
            output.append(i)
    return output
print(biggie_size([-1, 3, 5, -5]))


def count_positives(lst):
    count = 0
    for i in lst:
        if i>0:
            count+=1
    lst[-1] = count
    return lst
print(count_positives([1,6,-4,-2,-7,-2]))


def sum_total(lst):
    sum = 0
    for i in lst:
        sum+= i
    return sum
print(sum_total([1,2,3,4]))


def average(lst):
    sum = sum_total(lst)
    return sum/len(lst)
print(average([1,2,3,4]))


def length(lst):
    return len(lst)
print(length([]))


def minimum(lst):
    if len(lst)==0:
        return False
    min = lst[0]
    for i in lst:
        if i<min:
            min = i
    return min
print(minimum([]))


def maximum(lst):
    if len(lst)==0:
        return False
    max = lst[0]
    for i in lst:
        if i>max:
            max = i
    return max
print(maximum([37,2,1,-9]))


def ultimate_analysis(lst):
    dict = {}
    dict["sumTotal"] = sum_total(lst)
    dict['average'] = average(lst)
    dict["minimum"] = minimum(lst)
    dict["maximum"] = maximum(lst)
    dict["length"] = length(lst)
    return dict
print(ultimate_analysis([37,2,1,-9]))


def reverse_list(lst):
    endix = len(lst)-1
    for i in range(int(len(lst)/2)):
        temp = lst[endix]
        lst[endix] = lst[i]
        lst[i] = temp
        endix-=1
    return lst
print(reverse_list([37,2,1,-9]))