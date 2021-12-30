# Never Forget Git
from os import system

files = []


def add_files():
    print("Type the names of the files you would like to add and type nothing to finish")

    global files
    files = []

    i = 1
    while True:
        file = input(f"File {i}: ")
        if file == "":
            break
        files.append(file)
        i += 1

    file_list = " ".join(files)

    right = input(f"Does this look right: {file_list} (Y/n): ")

    if right.lower() == "n":
        add_files()
        return

    while True:
        commit_message = input("Enter a commit message: ")

        if commit_message != "":
            break

        print("Empty commit message")
        input("Check that the package.json version number has been updated appropriately\nCheck that the CHANGELOG.md has been updated appropriately\nWhen done, press enter ")

    print("Running commands...")

    for file in files:
        system(f"git add {file}")

    system(f"git add package.json")
    system(f"git add CHANGELOG.md")
    system(f"git commit -m \"{commit_message}\"")
    system(f"git push -u origin main")
    system(f"npm publish")


add_files()
