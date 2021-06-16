import pymysql

# pymysql.connect('code-translate-db.curusflffqkl.us-east-2.rds.amazonaws.com', 'admin', 'codetranslate2021!')
db = SQLALCHEMY_DATABASE_URI = pymysql.connect(host='code-translate-db.curusflffqkl.us-east-2.rds.amazonaws.com',
port=3306,
user='admin',
password='codetranslate2021!')

cursor = db.cursor()

# EXECUTE A QUERY
print(cursor.execute("select version()"))

data = cursor.fetchone()
print(data)

## Create a Table
sql = '''create database feedback'''
cursor.execute(sql)

sql = '''use database feedback'''
cursor.execute(sql)