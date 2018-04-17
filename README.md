# Repositório para o Treinamento de JS e VueJS

## Aplicações em VueJS

O que é necessário:
- Tenha o Git instalado [Link para o Git](https://git-scm.com/)
- Tenha o NodeJS instalado [Link para o Node](https://nodejs.org)

Após instalar o Git e o Node, escolha uma pasta para iniciar sua aplicação

## Para clonar o repositório

- Escolha uma pasta para onde clonar o repositório
- Dentro da pasta,clique com o botão direito e em "Git Bash here"
- Execute o seguinte comando:

```console
$ git clone http://gitlab.nobugs.com.br/internos/trainee
```

Caso seja solicitado acesso, logue com sua conta no GitLab.

Caso ainda não tenha uma conta, solicite à(ao) Daniela/Matheus para criar uma. 
Você recebera um email com um link de ativação, basta acessá-lo.

### Para rodar a aplicação que já existe

- Acesse a pasta para onde você clonou o repositório
    - Se desejar fazer direto pelo Explorador de Arquivos, abra a pasta e abra o Git Bash nela, como explicado anteriormente
    - Se já tiver clonado e o Git Bash ainda estiver aberto, execute o comando: 
    ```console 
        $ cd trainee
    ```

# Propridades de um componente
```javascript
export default {
    name: '',
    components {
    // Outros componentes, do Vuetify, Quasar ou qualquer outro package
    },
    /* Props são as propriedades que um componente pai passa
    para um component filho. As props não podem ser modificadas
    pelo próprio componente */
    props: [''],
    /*  data() é uma função que retorna as propriedades do componente,
    que ele tem acesso e ele mesmo define */
    data() {
        return {
        }
    },
    /* Os métodos que o componente possui, para processar informações,
    capturar ações, entre outros */
    methods: {
    
    },
    /* Computed são as variáveis computadas. Recebem uma função que
    irá retornar um valor para essas variáveis */
    computed :{
    
    }
}
```