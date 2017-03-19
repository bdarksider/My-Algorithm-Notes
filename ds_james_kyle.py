class List(object):
    def __init__(self):
        self.memory = []
        self.length = 0

    def get(self, address):
        return self.memory[address]

    def push(self, value):
        self.memory += [value]
        self.length += 1

    def pop(self):
        if self.length == 0:
            return
        last_address = self.length - 1
        value = self.memory[last_address]
        del self.memory[last_address]
        self.length -= 1
        return value

    def unshift(self, value):
        # store value that is to be stored
        previous = value

        for address in range(self.length):
            current = self.memory[address]
            self.memory[address] = previous
            previous = current

        # Add the last item
        self.memory += [previous]
        self.length += 1

    def shift(self):
        if self.length == 0:
            return
        value = self.memory[0]

        for address in range(self.length - 1):
            self.memory[address] = self.memory[address + 1]

        # Delete the last item since it is now in the previous address
        del self.memory[self.length -1]
        self.length -= 1

    def __repr__(self):
        return str(self.memory) + " " + str(self.length)

