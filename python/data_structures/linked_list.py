class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def add(self, value):
        if self.head is None:
            self.head = Node(value)
        else:
            node = Node(value)
            node.next = self.head
            self.head = node

    def reverse(self):
        prev = None
        current = self.head
        next_node = current.next
        while current is not None:
            current.next = prev
            prev = current
            current = next_node
            if(next_node):
                next_node = next_node.next
        self.head = prev

    def remove(self, value):
        node = self.head
        prev = None
        while node is not None:
            if node.value == value:
                if prev is None:
                    self.head = node.next
                prev.next = node.next
            prev = node
            node = node.next


linked_list = LinkedList()
linked_list.add(1)
linked_list.add(2)
linked_list.add(3)

linked_list.reverse()

assert linked_list.head.value == 1
assert linked_list.head.next.value == 2
assert linked_list.head.next.next.value == 3
