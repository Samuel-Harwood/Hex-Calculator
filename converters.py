#Dictionary of hex mapped to 4bit binary 
hex_dictionary = {
    '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
    '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
    'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101', 'E': '1110', 
    'F': '1111'
}

#Uses hex dictionary 
def hex_to_binary(input): 
    binary = []
    for i in input:
        if i in hex_dictionary:
            binary.append(hex_dictionary[i])
    return binary

#Takes binary list, converts it to decimal list
def binary_to_denary(binary):
    denary = []
    for i in binary:
        denary.append(int(i, 2))
    return denary

#Takes decimal list, converts to denary list 
def apply_positional_weighting(denary):
    output = []
    n = (len(denary) - 1)
    for i in denary:
        output.append(i * pow(16,n))
        n -= 1
    return output

