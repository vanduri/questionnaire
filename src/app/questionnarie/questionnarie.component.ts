import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-questionnarie',
  templateUrl: './questionnarie.component.html',
  styleUrls: ['./questionnarie.component.css']
})
export class QuestionnarieComponent {
  selectedAge: string = "";
  ages: string[] = ['<25', '>25 and <35', '>35'];

  constructor() {}
}
