release: python manage.py migrate

web: gunicorn backend.backend.wsgi --log-file -
