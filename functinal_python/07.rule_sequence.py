
def zero(s):
    if s[0] == "0":
        return s[1:]

def one(s):
    if s[0] == "1":
        return s[1:]

#--------------------------
# procedural way

def rule_sequence(s, rules):
    for rule in rules:
        s = rule(s)
        if s == None:
            break

    return s


#--------------------------
# functional way

def func_rule_sequence(s, rules):
    if s == None or not rules:
        return s
    else:
        return func_rule_sequence(rules[0](s), rules[1:])


#==========================
# demonstrate
#==========================

print rule_sequence('0101', [zero, one, zero])
print rule_sequence('0101', [zero, zero])

print func_rule_sequence('0101', [zero, one, zero])
print func_rule_sequence('0101', [zero, zero])
