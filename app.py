from flask import Flask, render_template, request, redirect, url_for
from system_stats import get_system_stats

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    lab_number = request.args.get('lab', 'Unknown Lab')
    pc_number = request.args.get('pc', 'Unknown PC')
    
    # Fetch system performance data
    stats = get_system_stats()
    
    return render_template(
        'dashboard.html', 
        lab_number=lab_number, 
        pc_number=pc_number, 
        stats=stats
    )

@app.route('/admin')
def admin():
    return render_template('admin.html')

if __name__ == '__main__':
    app.run(debug=True)
