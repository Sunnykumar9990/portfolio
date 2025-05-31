from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

# Rute
@app.route('/')
def home():
    return render_template('index.html') # Početna stranica

@app.route('/about')
def about():
    return render_template('about.html') # O nama

@app.route('/projects')
def projects():
    return render_template('projects.html') # Projekti

@app.route('/services')
def services():
    return render_template('services.html') # Usluge
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Ovdje bi inače bila logika za spremanje poruke
        # Npr. slanje emaila ili spremanje u datoteku
        # name = request.form['name']
        # email = request.form['email']
        # message = request.form['message']
        print(f"Primljena poruka od: {request.form['name']} ({request.form['email']}): {request.form['message']}")
        return redirect(url_for('home')) # Preusmjeri na početnu stranicu nakon slanja
    
    return render_template('contact.html') # Kontakt

if __name__ == '__main__':
    app.run(debug=False) # Pokreni aplikaciju