Nome Completo: Paulo Guilherme Silva de Araújo
Comandos usados na atividade:

- Iniciar o container:
docker compose up --build

- Encerrar o container:
docker compose down

- Contas Personalizadas:
paulo@empresa.com (gestor)
20251038060001

araujo@empresa.com (auditor)
10006083015202

- Material consultado: https://supertokens.com/blog/http-error-codes-401-vs-403

- Diferenças entre casos sem token e papeis não altorizados
Casos sem token geram o código 401 (Unauthorized). Esses casos indicam que o sistema não identificou aquele usuário,
ou seja, ele não foi altenticado corretamente
Casos de papeis não autorizados geram o código 403 (Forbidden). Esses casos indicam que o sistema reconheceu que são usuários autenticados,
mas eles não possuem autorização para acessar aquela determinada rota.