# APIS-ROTAS-PROTEGIDAS

Este projeto implementa um sistema de Rotas Protegidas utilizando Node.js e Express,
onde certas rotas só podem ser acessadas por usuários autenticados. O projeto faz uso de middlewares para proteger essas rotas, 
garantindo que apenas usuários autorizados tenham acesso.

Funcionalidades
Autenticação de Usuário: Verifica se o usuário está autenticado antes de permitir o acesso a determinadas rotas.
Rotas Protegidas: Rotas que requerem autenticação para serem acessadas.
Middlewares: Middleware de autenticação que valida o token JWT (JSON Web Token) ou sessão.
Registro e Login: Funções de criação de conta e login de usuário.
JWT (opcional): Implementação de proteção usando JWT para autenticação de usuários.
