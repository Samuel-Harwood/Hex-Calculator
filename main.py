import math
from converters import *




def main():
    user_input = input("Enter hex: ").upper()
    if user_input.startswith('0x'):
        user_input = user_input[2:]
    print(user_input)

    binary = hex_to_binary(user_input) #Convert to binary (we do this to make the conversion to denary easier)
    denary = binary_to_denary(binary) #Convert binary to denary 
    output = apply_positional_weighting(denary) #Combine all those values together to one value, using the formula i * (16^n-1)
    #Now we convert this value to binary

    sum = 0
    for i in range(0, len(output)):
        sum += output[i]

    print(f'Denary:', sum)
    print(f'Binary:',bin(sum)[2:])
    print(f'Oct:',oct(sum)[2:])




if __name__ == "__main__":
    main()



