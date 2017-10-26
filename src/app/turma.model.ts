/*
A classe Turma descreve a entidade "turma" no contexto da escola.
*/
export class Turma {
    constructor(public codigo: string,
        public disciplina: string,
        public ano: number) {
    }
}
