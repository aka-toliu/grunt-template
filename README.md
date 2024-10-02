
# Grunt template

Template para projetos que utilizam javascript, com compilamento de sass para css, minificação dos arquivos css e js, watch e bowsersync já configurados com grunt.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)


## Iniciar projeto

1. Install dependencies:

```bash
  npm install
```
2. Install grunt-cli:

```bash
  npm install -g grunt-cli
```
3. Run grunt:
```bash
  grunt
```
## Build
```bash
  grunt build
```
## Tecnologias

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Plugins do Grunt

Listagem de plugins do grunt, caso queira customizar:

[Grunt Plugins](https://gruntjs.com/plugins)


## Adicionando plugins ao projeto:

Acesse a página do plugin e siga as instruções. Por exemplo, o plugin [cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin):

1. Instalee como dependência:
``` bash
npm install grunt-contrib-cssmin --save-dev
```

2. Copie a linha de execução da tarefa e cole junto aos outros no ```gruntfile.js```:

``` javascript
grunt.loadNpmTasks('grunt-contrib-cssmin');
```

3. Adicione a estrutura de comando dentro do ```grunt.initconfig```

```javascript
cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'release/css',
      src: ['*.css', '!*.min.css'],
      dest: 'release/css',
      ext: '.min.css'
    }]
  }
}
```

4. Registre a tarefa para execução na linha de comando:
``` javascript
 grunt.registerTask('default', ["concat", 'sass', 'cssmin', 'browserSync', 'watch']);
```
