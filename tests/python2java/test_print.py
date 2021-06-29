# All the print tests for python2java
tFrom = "python"
tTo = "java"

def test_print_empty(client):
    p1 = client.post('/translate', json={
        'inputCode': 'print()', 'tTo': tTo, 'tFrom': tFrom }).get_json()

    assert p1['message'] == "Success"
    # assert p1['outputCode'] == "System.out.println()"

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