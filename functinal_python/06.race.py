
from random import random

#--------------------------
# procedural way

print 'procedural way'
print '======='

time = 5
car_positions = [1,1,1]

while time:
    time -= 1
    print ''
    for i in range(len(car_positions)):
        if random() > 0.3:
            car_positions[i] +=1

        print '-' * car_positions[i]

#--------------------------
# modular way

print 'modular way'
print '======='

def move_cars():
    for i, _ in enumerate(car_positions):
        if random() > 0.3:
            car_positions[i] += 1

def draw_car(car_position):
    print '-' * car_position

def run_step_of_race():
    global time
    time -= 1
    move_cars()

def draw():
    print ''
    for car_position in car_positions:
        draw_car(car_position)

time = 5
car_positions = [1,1,1]

while time:
    run_step_of_race()
    draw()

#--------------------------
# functional way

print 'functional way'
print '======='

def func_move_cars(car_positions):
    return map(lambda x: x + 1 if random() > 0.3 else x, car_positions)

def func_output_car(car_position):
    return '-' * car_position

def func_run_step_of_race(state):
    return {'time': state['time'] - 1,
            'car_positions': func_move_cars(state['car_positions'])}

def func_draw(state):
    print ''
    print '\n'.join(map(func_output_car, state['car_positions']))

def func_race(state):
    func_draw(state)
    if state['time']:
        func_race(func_run_step_of_race(state))

func_race({'time': 5,
      'car_positions': [1,1,1]})

#==========================
# demonstrate
#==========================

