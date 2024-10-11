import { JsonPipe } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-homedata',
  standalone: true,
  imports: [DataViewModule,JsonPipe],
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
