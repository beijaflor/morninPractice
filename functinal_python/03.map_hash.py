import random
names = ["Mary", "Isla", "Sam"]

#--------------------------
# procedural way

proc_names = list(names)

for i in range(len(proc_names)):
    proc_names[i] = hash(proc_names[i])

#--------------------------
# functional way

func_names = list(names)
func_names = map(hash, func_names)

#==========================
# demonstrate
#==========================

print proc_names
print func_names
