import sqlite3
import os
from flask import Flask, request, render_template_string, jsonify, session
import hashlib

app = Flask(__name__)
app.secret_key = "hardcoded_secret_key_123"

# Fixed: SQL Injection vulnerability - using parameterized queries
def get_user_data(username):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    # Safe parameterized query prevents SQL injection
    query = "SELECT * FROM users WHERE username = ?"
    cursor.execute(query, (username,))
    result = cursor.fetchone()
    conn.close()
    return result

# Fixed: Efficient algorithm - O(n) using hash set
def find_duplicates(numbers):
    seen = set()
    duplicates = set()
    
    for num in numbers:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    
    return list(duplicates)

# Fixed: Logic error - correct pagination with proper total pages calculation
def paginate_items(items, page, items_per_page=10):
    import math
    total_pages = math.ceil(len(items) / items_per_page)
    # Fixed: proper boundary check includes the last page
    if page < 1 or page > total_pages:
        return []
    
    start_index = (page - 1) * items_per_page
    end_index = start_index + items_per_page
    return items[start_index:end_index]

# Initialize database
def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username TEXT UNIQUE,
            password TEXT,
            email TEXT
        )
    ''')
    # Insert some test data
    test_users = [
        ('admin', hashlib.md5('password123'.encode()).hexdigest(), 'admin@example.com'),
        ('user1', hashlib.md5('userpass'.encode()).hexdigest(), 'user1@example.com'),
        ('user2', hashlib.md5('mypassword'.encode()).hexdigest(), 'user2@example.com')
    ]
    cursor.executemany('INSERT OR IGNORE INTO users (username, password, email) VALUES (?, ?, ?)', test_users)
    conn.commit()
    conn.close()

@app.route('/')
def index():
    return '''
    <h1>Sample App with Bugs</h1>
    <form action="/search" method="post">
        <input type="text" name="username" placeholder="Search username">
        <input type="submit" value="Search">
    </form>
    <a href="/duplicates">Test duplicate finder</a>
    <br><a href="/paginate">Test pagination</a>
    '''

@app.route('/search', methods=['POST'])
def search_user():
    username = request.form['username']
    user_data = get_user_data(username)
    if user_data:
        return f"User found: {user_data}"
    return "User not found"

@app.route('/duplicates')
def test_duplicates():
    numbers = [1, 2, 3, 2, 4, 5, 3, 6, 1, 7]
    duplicates = find_duplicates(numbers)
    return f"Duplicates found: {duplicates}"

@app.route('/paginate')
def test_pagination():
    items = list(range(1, 26))  # 25 items
    page = int(request.args.get('page', 1))
    paginated = paginate_items(items, page, 5)
    return f"Page {page}: {paginated}"

if __name__ == '__main__':
    init_db()
    app.run(debug=True)