# Anotações

### compilar o ts

    tsc nomearquivo.ts

### compilar atutomaticamente

    tsc -w

### compilar com npm

    npm run compile -- <pasta>

### comitar com npm

    npm run commit -- <mensagem>

### push com npm

    npm run push

### criar modulos com npm

    npm run criar_modulo -- <NOVO_MODULO> <MODULO_BASE>

### Type inference

     let teste = ""

### Type annotation

    let teste: string = ""

### gerar arquivo de configuração

    tsc --init

### Express com ts
   #### Dependencias Dev
      @types/express @types/node ts-node-dev typescript
   ####  Dependencias Prod
      express    
   #### Rodar projeto
```json
...
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
}
...
```
