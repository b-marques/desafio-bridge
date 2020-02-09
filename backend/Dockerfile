# Pull base image
FROM python:3.6-alpine

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy project
COPY . /backend/
# Set work directory
WORKDIR /backend

# Install dependencies
RUN apk add --no-cache \
  # Pipenv (not needed after install)
  && apk add --no-cache --virtual .build-deps \
  gcc \
  musl-dev \
  openssl-dev \
  libffi-dev \
  libressl-dev \
  mariadb-dev \
  && pip install --upgrade pip \
  && pip install -r requirements.txt \
  && apk del .build-deps

ENTRYPOINT ["sh", "docker-entrypoint.sh"]