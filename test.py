def hello_world():
    """A simple greeting function."""
    print("Hello, World!")

def add(a, b):
    """Add two numbers."""
    return a + b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

if __name__ == "__main__":
    hello_world()
    print(f"5 + 3 = {add(5, 3)}")
    print(f"5 * 3 = {multiply(5, 3)}")
