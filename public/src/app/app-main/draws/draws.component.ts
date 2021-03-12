import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'draws',
    templateUrl: './draws.component.html',
    styleUrls: ['./draws.component.css']
})
export class DrawsComponent implements OnInit {

constructor(private http: HttpClient) {}

ngOnInit() {
    this.loadDraws();
}

private loadDraws() {
    this.http
        .get('http://localhost:8000/draws')
        .subscribe(draws => {
        // ...
        console.log(draws);
        });
    }
}
