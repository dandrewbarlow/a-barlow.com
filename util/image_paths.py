# bc react-image-gallery is a pain in the ass to manually set up
import os

image_path = "../src/images/art"

# import images
for file in os.listdir(image_path):
    if os.path.isfile(os.path.join(image_path, file)):
        basename = os.path.splitext(file)[0].replace('-', '_')

        print(f'import {basename} from "../images/art/{file}"')
        print(f'import thumb_{basename} from "../images/art/thumb/thumb-{file}"')


# create array for react-image-gallery
print('')
print('let images = [')

for file in os.listdir(image_path):
    if os.path.isfile(os.path.join(image_path, file)):
        basename = os.path.splitext(file)[0].replace('-', '_')

        print('    {')
        print(f'        original: {basename},')
        print(f'        thumbnail: thumb_{basename}')
        print('    },')

print(']')