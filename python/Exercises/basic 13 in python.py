# # print 1-255
#
# for i in range(1, 256):
#         print i
# #print odd
# for i in range(1,256, 2):
#         print i
# #print sum
# sum = 0
# for i in range(0, 256):
#      sum += i
#      print "new number",i
#      print "sum:",sum,
# #iterating through arrays
# a = [1,2,3,4,7,8]
# print(a)
#
# #find max
#
# a = [1,5,4,10,8,9]
# max = 0
# for i in range(len(a)):
#     if a[i] > max:
#         max = a[i]
# #get avg
# a = [10,5,18]
# sum = 0
# for i in range(len(a)):
#     sum += a[i]
# print(sum / len(a))
# # array with odds
# y = []
# for i in range(1,256,2):
#     y.append(i)
# print y
# # greater than y
# y = 3
# a = [1,2,5,7,3]
# b = []
# for i in range(len(a)):
#     if y < a[i]:
#         b.append(a[i])
# print b
# # square the values
# a = [2,7,4,7,4]
# for i in range(len(a)):
#     a[i] *= a[i]
# print a
# # eliminate negative values
# a = [2,3,-7,-4,1]
# b = []
# for i in range(len(a)):
#     if a[i] > 0:
#         b.append(a[i])
# print b
# # max,min,average
max = 0
min = a[1]
sum = 0
a = [2,3,7,3,6]
for i in range(len(a)):
    if a[i] > max:
        max = a[i]
    if a[i] < min:
        min = a[i]
print max
print min
