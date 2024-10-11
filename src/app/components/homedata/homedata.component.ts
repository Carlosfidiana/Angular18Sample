import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-homedata',
  standalone: true,
  imports: [DataViewModule,JsonPipe,CommonModule,ButtonModule,TagModule],
  templateUrl: './homedata.component.html',
  styleUrl: './homedata.component.css'
})
export class HomedataComponent {
  test=[
    {name:"hola"},
  ]

  $data: any = signal([{name:"hola"}]);

  @Input()
  public set data(data: any) {
    this.$data.set(data);
    console.log(this.$data())
  }

}
