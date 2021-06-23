import subprocess

print("Hello world")

python3_command = "py -2 j2py.py HelloWorld.java Helloworld.py"
process = subprocess.Popen(python3_command.split(), stdout=subprocess.PIPE)
output, error = process.communicate()  # receive output from the python2 script

print(output)