


def zalgorithm(string):
    zarray = [0 for i in range(len(string))]
    left = 0
    right = 0
    for k in range(1, len(string)):
        # if we don't have a z-box yet, we must make one
        if k > right:
            left = k
            right = k
            while right < len(string) and string[right] == string[right - left]:
                right += 1
            zarray[k] = right - left
            right -= 1
        # if k <= right, it means that we are now inside our z-box
        else:
            k1 = k - left
            # if the z value we are looking at doesn't touch the right side of our z-box, just copy it
            if zarray[k1] < right - k + 1:
                zarray[k] = zarray[k1]
            # if it goes outside, we must check if there are future matches
            else: 
                # create new z-box, which is very familiar to the first if statement
                left = k
                while right < len(string) and string[right] == string[right - left]:
                    right += 1
                zarray[k] = right - left
                right -= 1
    return zarray


print(zalgorithm("abaxabab"))

            
                
                


