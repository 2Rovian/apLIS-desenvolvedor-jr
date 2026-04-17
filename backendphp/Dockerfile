FROM php:8.3-cli

RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html

COPY . .

EXPOSE 8080

CMD ["php", "-S", "0.0.0.0:8080", "-t", "src", "src/index.php"]