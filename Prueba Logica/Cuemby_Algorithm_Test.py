def canBeSplitted(strArr):

    if strArr == []:return 0
    
    left = 0
    right = 0
    count_l = 0
    count_r = 0
    
    for i in range(len(strArr)):
        if left <= right:
            left = left + strArr[count_r]
            count_r += 1
            
        elif left >= right:
            right = right + strArr[-count_l-1]
            count_l += 1
    
    if left == right: return 1
    
    else: return -1
   

print(canBeSplitted([2 , 5 , 3 , 8 , 1 , 4 , 3 , 2 , 3 , 5])) 
