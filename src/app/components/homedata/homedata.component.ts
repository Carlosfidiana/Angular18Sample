import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectItem } from 'primeng/api';
import { Button, ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-homedata',
  standalone: true,
  imports: [DataViewModule,JsonPipe,CommonModule,ButtonModule,TagModule,DropdownModule,FormsModule],
  templateUrl: './homedata.component.html',
  styleUrl: './homedata.component.css'
})
export class HomedataComponent {

  @Output() select = new EventEmitter();
  $data: any = signal([{name:"hola"}]);

  @Input()
  public set data(data: any) {
    this.$data.set(data);
  }

  public click(item: any) {
    this.select.emit(item);
  }
}
