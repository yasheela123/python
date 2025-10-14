class shoppingCart:
    def __init__(self):
        self.items = []

    def add_items(self,item_name,qty):
        item = (item_name,qty)
        self.items.append(item)

    def remove_item(self,item_name):

        for item in self.items:
            if item[0] == item_name:
                self.items.remove(item)
                break
    def calculate_total(self):
        total = 0
        for item in self.item:
            total += item[1]
           return total

# driver code
cart = shoppingCart()
# Add items to the shopping cart
cart.add_item("Papaya",100)
cart.add_item("Guava",200)
cart.add_item("Orange",150)
