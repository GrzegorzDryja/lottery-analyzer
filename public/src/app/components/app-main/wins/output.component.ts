import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Draw } from '../../../../models/draw';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() wins: string;

  constructor() {}

  ngOnInit(): void {}

  // outputWins(data: Draw){
  //    this.winsCreated.emit({
  //     Numer: data.Numer,
  //     Dzien: data.Dzien,
  //     Miesiac: data.Miesiac,
  //     Rok: data.Rok,
  //     L1: data.L1,
  //     L2: data.L2,
  //     L3: data.L3,
  //     L4: data.L4,
  //     L5: data.L5,
  //     L6: data.L6,
  //     L7: data.L7,
  //     L8: data.L8,
  //     L9: data.L9,
  //     L10: data.L10,
  //     L11: data.L11,
  //     L12: data.L12,
  //     L13: data.L13,
  //     L14: data.L14,
  //     L15: data.L15,
  //     L16: data.L16,
  //     L17: data.L17,
  //     L18: data.L18,
  //     L19: data.L19,
  //     L20: data.L20  
  //   })
  // }
}
