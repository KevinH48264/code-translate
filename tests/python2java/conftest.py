import pytest
from app import app

# conftest is a file that pytest will reference, it allows any functions to call on client
@pytest.fixture
def client():
    yield app.test_client() # passed as an argument