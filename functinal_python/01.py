#--------------------------
# procedural way

def increment_proc():
    global a
    a += 1

#--------------------------
# functional way

def increment_func(a):
    return a + 1



#==========================
# demonstrate
#==========================
a = 0
print(a)
increment_proc()
print(a)
a = increment_func(a)
print(a)

