const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}
    ];
   
  
    function adicionarAluno (nome){
        alunosDaEscola.push({nome:nome,notas:[],cursos:[],faltas:null})
        console.log (`O Aluno ${nome} foi Cadastrado com Sucesso`)
       /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
       E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
       A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
      }
   
    
    function listarAlunos(){
        alunosDaEscola.forEach(aluno =>{
           console.log("Aluno: ",aluno.nome, "\nNotas: ", aluno.notas, "\nCursos: ", 
           aluno.cursos, "\nFaltas: ", aluno.faltas);
           console.log('*'.repeat(100))
        })
        /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
        dizer que As informações deverão ser exibidas em um formato amigável.*/
       }
  
    function buscarAluno(nome){
        let aluno = alunosDaEscola.filter(aluno=>{ return aluno.nome === nome;});
        if(aluno.length > 0){
          console.log(`${nome} é Aluno`)
          return aluno;
        }else {console.log (`${nome} não é Aluno`)}
        /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. 
        Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. 
        E deverá devolver um aluno em seu retorno. */
      }
      
      function matricularAluno(aluno, curso){
          let busca = buscarAluno(aluno); // verifica se o aluno está cadastrado
          if(busca && busca.length > 0){
            busca[0].cursos.push({
              nomeDoCurso: curso,
              dataMatricula: new Date,
            })
            console.log(`O Aluno ${aluno} foi matriculado no curso: ${curso}`)
          }
      
            /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
        Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá 
        armazenar a data atual no momento da matricula. Lembre-se de exibir o feedback para o usuário. */
        }
        
        function aplicarFalta(aluno){
            let busca = buscarAluno(aluno);
            if(busca && busca[0].cursos.length > 0){
              busca[0].faltas++;
              console.log(`O Aluno ${aluno} recebeu uma falta no curso: ${busca[0].cursos[0].nomeDoCurso}`);
            }else{console.log(`O Aluno ${aluno} não está matriculado em nenhum curso`)}
  
  
          /*
           Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. 
           Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver 
           matriculado em um curso.
          */
          }
  
          function aplicarNota(aluno, nota){
             let busca = buscarAluno(aluno);
             if(busca && busca[0].cursos.length>0){
               busca[0].notas.push(nota);
               console.log(`O Aluno ${aluno} teve a nota: ${nota} incluida`)
             }else{console.log(`O Aluno ${aluno} não está matriculado em nenhum curso`)}
  
             /*Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na 
             sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno 
             se o mesmo tiver matriculado em um curso.
            */
          }
          
             function aprovarAluno(aluno){
               let busca = buscarAluno(aluno);
               let media = busca[0].notas.reduce((acum,numero)=>{ return acum + numero})/ busca[0].notas.length;
               if(busca && busca[0].cursos.length >0 && busca[0].faltas <= 3 && media >= 7 ){
                 console.log(`O Aluno ${aluno} está aprovado com média igual a ${media} 
                  no curso: ${busca[0].cursos[0].nomeDoCurso}`)
               }else if(busca && busca[0].cursos.length >0 && busca[0].faltas <= 3 && media <= 7 ){
                console.log(`O Aluno ${aluno} está reprovado com média igual a ${media} 
                no curso: ${busca[0].curso[0].nomeDoCurso}`)
               }else{console.log(`O Aluno ${aluno} não está matriculado em nenhum curso`)}
             /* 
             Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não.
             Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
             Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
             */
             }
  
  
  adicionarAluno("Marcelo");
  buscarAluno('Lucca')
  matricularAluno('Marcelo', "full stack");
  aplicarFalta('Guilherme')
  aplicarFalta('Marcelo')
  listarAlunos()
  aplicarNota('Marcelo', 8.9)
  aprovarAluno('Marcelo')