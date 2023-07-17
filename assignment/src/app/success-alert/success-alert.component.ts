import {Component} from '@angular/core';

@Component({
    selector:'app-success-alert',
    template:`
    <p>This is successful message</p>
    `,
    styles:[`
    p{
        background-color:red;
        color:#fff;
    }
    `]
})


export class SuccessAlertComponent{

}