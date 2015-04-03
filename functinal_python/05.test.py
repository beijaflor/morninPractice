
people = [
            {'name': 'Mary', 'height': 160},
            {'name': 'Isla', 'height': 80},
            {'name': 'Sam'}
        ]

#--------------------------
# procedural way

height_total = 0
height_count = 0
for person in people:
    if 'height' in person:
        height_total += person['height']
        height_count += 1

if height_count > 0:
    proc_average_height = height_total / height_count
else:
    proc_average_height = 0

#--------------------------
# functional way

heights = map(lambda x: x['height'],
            filter(lambda x: 'height' in x, people))
if len(heights) > 0:
    total = reduce(lambda a, x: a + x, heights, 0)
    func_average_height = total / len(heights)
else:
    func_average_height = 0

# func_average_height = reduce(lambda a, x: a + x['height'], filter(lambda x: 'height' in x, people), height_total) / len(filter(lambda x: 'height' in x, people))

#==========================
# demonstrate
#==========================

print proc_average_height
print func_average_height
