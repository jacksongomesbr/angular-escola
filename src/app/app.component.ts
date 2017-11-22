import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando = null;
  nome = null;
  descricao = null;
  excluir_ok = false;
  editar_ok = false;
  salvar_ok = false;
  disciplinas = [
    new Disciplina('Língua Portuguesa', 'O objetivo norteador da BNCC de ' +
      'Língua Portuguesa é garantir a todos os alunos o acesso aos saberes ' +
      'linguísticos necessários para a participação social e o exercício da ' +
      'cidadania, pois é por meio da língua que o ser ' +
      'humano pensa, comunica-se, tem acesso à informação, expressa e ' +
      'defende pontos de vista, partilha ou constrói visões de mundo e ' +
      'produz conhecimento.'),
    new Disciplina('Educação Física', 'A Educação Física é o componente ' +
      'curricular que tematiza as práticas corporais em suas diversas formas ' +
      'de codificação e significação social, entendidas como manifestações ' +
      'das possibilidades expressivas dos sujeitos e patrimônio cultural ' +
      'da humanidade. Nessa concepção, o movimento humano está sempre ' +
      'inserido no âmbito da cultura e não se limita a ' +
      'um deslocamento espaço-temporal de um segmento corporal ' +
      'ou de um corpo todo. Logo, as práticas corporais são textos culturais ' +
      'passíveis de leitura e produção.'),
    new Disciplina('Inglês', 'Aprender a língua inglesa propicia a criação ' +
      'de novas formas de engajamento e participação dos alunos em um mundo ' +
      'social cada vez mais globalizado e plural, em que as fronteiras ' +
      'entre países e interesses pessoais, locais, regionais, nacionais ' +
      'e transnacionais estão cada vez mais difusas e contraditórias. ' +
      'Assim, o estudo da língua inglesa possibilita aos alunos ampliar ' +
      'horizontes de comunicação e de intercâmbio cultural, científico ' +
      'e acadêmico e, nesse sentido, abre novos percursos de acesso, ' +
      'construção de conhecimentos e participação social. É esse caráter ' +
      'formativo que inscreve a aprendizagem de inglês em uma perspectiva ' +
      'de educação linguística, consciente e crítica, na qual as dimensões ' +
      'pedagógicas e políticas são intrinsecamente ligadas.'),
    new Disciplina('Matemática', 'No Ensino Fundamental, essa área, por ' +
      'meio da articulação de seus diversos campos – Aritmética, Álgebra, ' +
      'Geometria, Estatística e Probabilidade – precisa garantir que os ' +
      'alunos relacionem observações empíricas do mundo real a ' +
      'representações (tabelas, figuras e esquemas) e associem essas ' +
      'representações a uma atividade matemática, conceitos e ' +
      'propriedades, fazendo induções e conjecturas. Assim, espera-se ' +
      'que eles desenvolvam a capacidade de identificar oportunidades ' +
      'de utilização da matemática para resolver problemas, aplicando ' +
      'conceitos, procedimentos e resultados para obter soluções e ' +
      'interpretá-las segundo os contextos das situações. A dedução de ' +
      'algumas propriedades e a verificação de conjecturas, a partir ' +
      'de outras, podem ser estimuladas, sobretudo ao final do ' +
      'Ensino Fundamental.'),
    new Disciplina('Ciências', 'Ao estudar Ciências, as pessoas aprendem ' +
      'a respeito de si mesmas, da diversidade e dos processos de evolução ' +
      'e manutenção da vida, do mundo material – com os seus recursos ' +
      'naturais, suas transformações e fontes de energia –, do nosso ' +
      'planeta no Sistema Solar e no Universo e da aplicação dos ' +
      'conhecimentos científicos nas várias esferas da vida humana. ' +
      'Essas aprendizagens, entre outras, possibilitam que os alunos ' +
      'compreendam, expliquem e intervenham no mundo em que vivem.')
  ];

  salvar() {
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;
      this.editar_ok = true;
    } else {
      const d = new Disciplina(this.nome, this.descricao);
      this.disciplinas.push(d);
      this.salvar_ok = true;
    }
    this.nome = null;
    this.descricao = null;
    this.editando = null;
  }

  excluir(disciplina) {
    this.redefinir();
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
        this.excluir_ok = true;
      }
    }
  }

  editar(disciplina) {
    this.redefinir();
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.editando = disciplina;
  }

  cancelar() {
    this.redefinir();
  }

  redefinir() {
    this.nome = null;
    this.descricao = null;
    this.editando = null;
    this.excluir_ok = false;
    this.salvar_ok = false;
    this.editar_ok = false;
  }
}
