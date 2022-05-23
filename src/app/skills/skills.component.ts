import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SoftskillComponent implements OnInit {

  /* SOFT SKILLS */

  arraySoftSkills = [
    { id: 1, descricao: 'Comunicativo' },
    { id: 2, descricao: 'Criativo' },
    { id: 3, descricao: 'Trabalho em equipe' },
    { id: 4, descricao: 'Quieto' },
    { id: 5, descricao: 'Curioso' },
    { id: 6, descricao: 'Trabalho melhor sozinho' },
    { id: 7, descricao: 'Blablabla' },
  ];

  softSkillsDesejadas = [1, 3, 7];

  softSkillsSelecionadas: number[] = [];

  /* HARD SKILLS */

  arrayHardSkills = [
    { id: 1, descricao: 'HTML' },
    { id: 2, descricao: 'CSS' },
    { id: 3, descricao: 'Bootstrap' },
    { id: 4, descricao: 'Sass' },
    { id: 5, descricao: 'JavaScript' },
    { id: 6, descricao: 'React' },
    { id: 7, descricao: 'Angular' },
    { id: 8, descricao: 'Vue' },
    { id: 9, descricao: 'Java' },
    { id: 10, descricao: 'Spring Boot' },
    { id: 11, descricao: 'Python' },
    { id: 12, descricao: 'C#' },
  ];

  hardSkillsDesejadas = [1, 2, 5, 7, 9];

  hardSkillsSelecionadas: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  /* SOFT SKILLS */

  onClickSoftSkill(idSkill: number): void {
    if (this.softSkillsSelecionadas.indexOf(idSkill) === -1) {
      this.softSkillsSelecionadas.push(idSkill);
    } else {
      this.softSkillsSelecionadas = this.softSkillsSelecionadas.filter(
        (x) => x !== idSkill
      );
    }
  }

  getSoftSkillStyle(idSkill: number): string {
    if (this.softSkillsSelecionadas.indexOf(idSkill) !== -1) {
      return 'btn-selecionada';
    }

    return 'btn-nao-selecionada';
  }

  /* HARD SKILLS */

  onClickHardSkill(idSkill: number): void {
    if (this.hardSkillsSelecionadas.indexOf(idSkill) === -1) {
      this.hardSkillsSelecionadas.push(idSkill);
    } else {
      this.hardSkillsSelecionadas = this.hardSkillsSelecionadas.filter(
        (x) => x !== idSkill
      );
    }
  }

  getHardSkillStyle(idSkill: number): string {
    if (this.hardSkillsSelecionadas.indexOf(idSkill) !== -1) {
      return 'btn-selecionada';
    }

    return 'btn-nao-selecionada';
  }
}
