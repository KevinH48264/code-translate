from server.python2java.python2java import python2java
from server.inputProcessing.inputProcessing import createInputFile
from server.outputProcessing.outputProcessing import readOutputFile

def test_print_empty():
    # should probably be testing the translate function instead, where the global JSON variables are tFrom="python" and tTo="java", and I'm testing the input and output codes
    i1 = createInputFile("print()")
    o1 = python2java(i1)
    p1 = readOutputFile(o1)

    assert p1 == "System.out.println();"

# def test_print_singleline():
#     i1 = createInputFile('print("a")')
#     o1 = python2java(i1)
#     p1 = readOutputFile(o1)

#     assert p1 == 'System.out.println("a");'

# def test_print_multiplelines():
#     i1 = createInputFile('print("a")\nprint("b")')
#     o1 = python2java(i1)
#     p1 = readOutputFile(o1)

#     assert p1 == 'System.out.println("a");\nSystem.out.println("b");'