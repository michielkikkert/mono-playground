import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mono-playground-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  message = 'Hello';
  country$!: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.country$ = this.http.get('https://workers.fxdomains.com/country')
  }

}

@NgModule({
  declarations: [Test1Component],
  imports: [CommonModule]
})
class Test1Module {}
