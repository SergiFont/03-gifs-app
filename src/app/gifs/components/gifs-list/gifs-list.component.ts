import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-list',
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {

  @Input()
  public gifs: Gif[] = []

}
