# Encurtador de URLS

## Pré Requisitos
* Instalar o NPM
* Instalar o Gulp e o Bower
* PHP > 5.6

## Api ( Laravel )
* ``` cd api/ ```
* ``` composer install ```
* ``` php artisan key:generate ```
* Duplicar arquivo .env.example e configurar de acordo com o banco de dados
* ``` php artisan migrate && php artisan db:seed ``` (Criar as tabelas e colocar um usuário no banco)
* ``` php artisan serve ```

## Webapp ( AngularJS )
* ```cd webapp/```
* ``` npm install && bower install ```
* ``` gulp serve ```


Após executar o ``` php artisan serve ``` e o ``` gulp serve ``` baster ir até localhost:3000 e testar o encurtador.

A porta padrão para o servidor da api é 8000 - Se mudar esta porta é necessário alterar também a url da api no arquivo ```/webapp/app/services/encurtador.service.js```

A porta padrão para o servidor do webapp é 3000 - Servidor gerado pelo BrowserSync

---
![Encurtador1](https://raw.github.com/guiassemany/encurtador-url/master/Docs/pic1.png)
