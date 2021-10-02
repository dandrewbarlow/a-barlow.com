import os
import sys

'''
# pass in folder w/ images as arg
files="$(ls "$1")"

for i in "$files"; do
	if [ ! -d "./$1/$i" ]; then
		echo "./$1/$i"
		# echo  "./$1/thumb/thumb-$(basename "$i")"
	    #convert -thumbnail 500 $i "./$1/thumb/thumb-$(basename $i)"
	fi;
done;
'''

def create_thumbnails(path):
	files = os.listdir(path)
	for file in files:
		filepath = os.path.join(path, file)
		if not os.path.isdir(filepath):
			thumb_filepath = os.path.join(path, f'thumb/thumb-{file}')
			command = f'convert -thumbnail 500 {filepath} {thumb_filepath}'
			# print(command)
			os.system(command)

def main(argv):
	for i in argv:
		if i != 'create_thumbnails.py':
			path = f'{os.getcwd()}/{i}'
			create_thumbnails(path)

if __name__ == "__main__":
	main(sys.argv)