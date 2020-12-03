#program to generate new list items for my labs

def main():
    title = raw_input("Please enter the title: ")
    path = "labs/" + raw_input("Please enter the file name: ")
    description = raw_input("Please enter a description: ")

    content = '''
    <li>
    <a href="https://placeholder.com"><img src="https://via.placeholder.com/50" alt="thumbnail"></a>
    <br>
    <a href="%s">%s</a>
    <p>%s</p>
    </li>
    '''
    print(content % (path, title, description))

main()
