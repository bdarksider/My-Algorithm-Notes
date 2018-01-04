def garage(initial, final):
    steps = 0
    while initial != final:
        zero = initial.index(0)
        if zero != final.index(0):
            car_to_move = final[zero]
            pos = initial.index(car_to_move)
            initial[zero], initial[pos] = initial[pos], initial[zero]
        else:
            for i in range(len(initial)):
                 if initial[i] != final[i]:
                    initial[i], initial[zero] = initial[zero], initial[i]
                    break
        steps += 1
    return steps


initial = [1,2,3,0,4]
final = [0, 3, 2, 1, 4]

assert garage(initial, final) == 4