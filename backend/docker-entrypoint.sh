#!/bin/bash
set -e

python src/manage.py check --deploy

 # Apply database migrations
python src/manage.py migrate                 

# Starts the server
python src/manage.py runserver 0.0.0.0:8000
