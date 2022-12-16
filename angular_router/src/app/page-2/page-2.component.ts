import { Component } from '@angular/core';

@Component({
    selector: 'app-page2',
    template:`
    <div>
        <h1>Page 2</h1>
    </div>`,
    styles: [`
    div{
        display: flex;
        justify-content: 'center';
        align-items: 'center'
    }
    `]
})
export class Page2Component{
}
