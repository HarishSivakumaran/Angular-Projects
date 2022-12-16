import { Component } from '@angular/core';

@Component({
    selector: 'app-page1',
    template:`
    <div>
        <h1>Page 1</h1>
    </div>`,
    styles: [`
    div{
        display: flex;
        justify-content: 'center';
        align-items: 'center'
    }
    `]
})
export class Page1Component{
}
