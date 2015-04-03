import random
names = ["Mary", "Isla", "Sam"]
code_names = ['Mr. Pink', 'Mr. Orange', 'Mr, Blonde']

name_lengths = map(len, names)
squares = map(lambda x: x * x, [0, 1, 2, 3, 4])

print name_lengths
print squares

#--------------------------
# procedural way

proc_names = list(names)

for i in range(len(proc_names)):
    proc_names[i] = random.choice(code_names)

#--------------------------
# functional way

secrat_names = map(lambda x: random.choice(code_names), names)

#==========================
# demonstrate
#==========================

print proc_names
print secrat_names
