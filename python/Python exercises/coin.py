import random
tries = 0
heads = 0
tails = 0
for i in range(1,100):
    coin = random.randint(1, 2)
    if coin == 1:
        heads += 1
        print "Attempt", i, "its heads", "got",heads,"heads so far and",tails,"tail so far"
    if coin == 2:
        tails += 1
        print "Attempt", i, "its tails", "got",heads,"heads so far and",tails,"tails so far"
