Desafio Ténico Frontend
---

O objetivo deste desafio é permitir uma melhor avaliação das suas habilidades como candidato à vaga de Frontend, de vários níveis. 
Ele deve ser feito por você em sua casa.

### Instruções de entrega do desafio

---
Faça um fork desse projeto na sua conta GitHub, ao finalizar, adicione acesso aos emails informados pelo RH.

### Descrição do projeto 

---

O projeto vem com Vue 3 e UnoCSS instalado, seu objetivo é desenvolver uma tela seguindo as específicações que serão 
detalhadas abaixo com o design definido no [Figma](https://www.figma.com/design/x3sf2e5hvXLq8B0dJ3LJzr/Teste-Frontend?t=b9Js9dMHG5bJChqg-0), 
você deve apenas usar as dependencias já instaladas nesse projeto, porém você pode mudar configurações, estrutura de pastas e afins 
como achar necessário.

#### Detalhamento
O seu objetivo é desenvolver uma tela de listagem de Tarefas, o design está definido nesse 
[Figma](https://www.figma.com/design/x3sf2e5hvXLq8B0dJ3LJzr/Teste-Frontend?t=b9Js9dMHG5bJChqg-0)
onde também está definido o relacionamento entre campos do json e dados que devem aparecer na tela. 

Além dos card de tarefas deve existir também uma barra de pesquisa que deve filtrar os cards
pelos campos `str_automation_name`, `str_step_name` e `str_step_label`.

Além disso o design define duas abas, uma de tarefas `Abertas` e outra de tarefas `Finalizadas`, em cada uma dessas abas
a listagem deve mostrar Tarefas diferentes:
 - Quando o `str_task_status` for igual a `pending` ou for igual a `waiting` a tarefa deve aparecer na aba de `Abertas`
 - E, quando o `str_task_status` for igual a `finished` ou for igual a `canceled` a tarefa deve aparecer na aba de `Finalizadas`

Os ícones presentes na tela e componentes podem ser carregados via UnoCSS, como demonstrado na view de exemplo `MainView.vue`.

Não esperamos que as telas e componentes fique **exatamente** igual ao design, diferenças de espaçamentos e cores podem existir,
porém, o layout tem que ser seguido e o mapeamento dos dados do json com os cards deve ser como definido no Figma. 

> Mesmo que você não consiga finalizar todos os requerimentos encorajamos a enviar o projeto mesmo assim!

#### Dados para montar a tela
Para usar os dados você deve fazer uma conexão via uma API HTTP que deve ser rodada localmente via `pnpm mock-server`, 
esse comando inicializara uma API usando o pacote [json-server](https://github.com/typicode/json-server) 
a partir dos dados presentes na pasta `db/`.

Essa API terá a rota `/tasks` disponível para uso, como documentado no [README do projeto json-server](https://github.com/typicode/json-server?tab=readme-ov-file#routes)

Por exemplo fazendo o seguinte request com `curl`:
```bash
$ curl localhost:3000/tasks/1
{
  "id": "1",
  "str_automation_name": "proin at turpis a pede",
  "str_step_name": "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci",
  "str_task_status": "finished",
  "str_step_type": "approval",
  "ts_created_at": "2025-06-30T15:40:54Z",
  "ts_finished_at": "2025-06-30T15:11:34Z",
  "str_step_label": null
}
```

A view `MainView.vue` faz um simples teste para verificar se API está rodando corretamente na sua máquina.

#### JSON das Tarefas:
```json
 {
    "id": 1, # ID da Tarefa
    "str_automation_name": "proin at turpis a pede",  # Nome do Fluxo relacionado a Tarefa
    "str_step_name": "sagittis nam congue risus semper porta volutpat quam",  # Nome da Etapa relacionada a Tarefa
    "str_task_status": "finished", # Status da Tarefa
    "str_step_type": "approval", # Tipo da Tarefa
    "ts_created_at": "2025-06-30T15:40:54Z",  # Data de criação da Tarefe retornado em UTC
    "ts_finished_at": "2025-06-30T15:11:34Z",  # Data de finalização da Tarefa retornado em UTC (pode ser nulo)
    "str_step_label": null  # Etiqueta da etapa da Tarefa (pode ser nulo)
  }
```

### Diretrizes:
- Nenhuma livraria ou framework pode ser adicionado ao projeto, deve ser utilizado apenas as dependencias já instaladas
- Typescript deve ser utilizado
- Deve ser usado o Vue 3 instalado junto com o [Compostion API](https://vuejs.org/api/composition-api-setup.html) com [`<script step lang="ts">`](https://vuejs.org/api/sfc-script-setup.html)
- Os botões no layout no design do Card não precisam ter funcionalidade
- Encorajamos o uso do UnoCSS para estilização, porém CSS também pode ser utilizado
- O projeto pode ser componentizado e organizado a seu critério
- É obrigatório o uso da API via json-server para pegar os dados de tarefas
- Nenhuma build precisa ser gerada o projeto será avaliado em modo de desenvolvimento com `pnpm dev`

---
## Setup

Instalar as dependencias do projeto:
```sh
pnpm install
```

Para rodar o projeto em modo de dev:
```sh
pnpm dev
```

Para rodar a API com json-server:
```sh
pnpm mock-server
```
