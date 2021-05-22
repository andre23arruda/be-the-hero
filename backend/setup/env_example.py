# RENAME THIS FILE TO env.py
import os, json, socket


def get_ip_address():
    '''Return IP adress'''
    hostname = socket.gethostname()
    ip_address = socket.gethostbyname(hostname)
    return ip_address

def get_allowed_hosts():
    '''Create a list of aloowed hosts'''
    hosts = ['127.0.0.1', 'localhost', get_ip_address()]
    return hosts


os.environ['SECRET_KEY'] = 'your key'
os.environ['DEBUG'] = 'true'
os.environ['ALLOWED_HOSTS'] = json.dumps(get_allowed_hosts())
os.environ['LANGUAGE_CODE'] = 'pt-br'
os.environ['TIME_ZONE'] = 'America/Sao_Paulo'

os.environ['CORS_ALLOWED_ORIGINS'] = f'["http://localhost:3000"]'
os.environ['X_FRAME_OPTIONS'] = 'SAMEORIGIN'
os.environ['CORS_ORIGIN_WHITELIST'] = f'http://localhost:3000'
