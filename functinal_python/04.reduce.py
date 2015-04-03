
sentences = [
                'Mary read a story to Sam and Isla.',
                'Isla cuddled Sam.',
                'Sam chortled.'
            ]

sum = reduce(lambda a, x: a + x, [0, 1, 2, 3, 4])

#--------------------------
# procedural way

sam_count = 0;
for sentence in sentences:
    sam_count += sentence.count('Sam')

#--------------------------
# functional way

func_sam_count = reduce(lambda a, x: a + x.count('Sam'), sentences, 0)

#==========================
# demonstrate
#==========================

print sum
print sam_count
print func_sam_count
