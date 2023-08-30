import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '@app/_services';
import CloseIcon from '@mui/icons-material/Close';
import { User } from '@app/_models';
import { Router,NavigationEnd } from '@angular/router';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
interface ContactPerson {
  name: string;
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less']
})

export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  replyNewPassword: string = '';
  submitted: boolean = false;
  errorMessages: any;
  changeDetectorRef: any;
  closeIcon:any=CloseIcon

  setError(field: string, errorMessage: string) {
    this.errorMessages = { ...this.errorMessages, [field]: errorMessage };
  }

  onSubmit() {
    this.submitted = true;
    if (this.isFormValid()) {
      // Submit the form or perform other actions
    }
  }
  
  isFormValid(): boolean {
    let isValid = true;
  
    // Perform validation for required fields and email
    const requiredFields = [
      { field: 'oldPassword', label: 'First Name' },
      { field: 'newPassword', label: 'Last Name' },
      { field: 'replyNewPassword', label: 'replyNewPassword' },
    ];
   
    for (const requiredField of requiredFields) {
      if (!newFunction(requiredField)) {
        this.setError(requiredField.field, `${requiredField.label} is required`);
        isValid = false;
      }
    }
    return isValid; // Return true if all validations pass
    function newFunction(this: any, requiredField: { field: string; label: string; }) {
      return this[requiredField.field];
    }
  }

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 7, color: 'lightgreen'},
    
  ];

  isSmallScreen = false;
  user?:User|null; 
  currentPath: string='';

  constructor(private authenticationService: AuthenticationService,private router: Router) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnInit() {
    this.currentPath = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url;
      }
    });
  }

  logout() {
    this.authenticationService.logout();
}

  updateTileCols() {
    this.tiles[1].cols = this.isSmallScreen ? 4 : 3;
    this.tiles[0].cols = this.isSmallScreen ? 4 : 1;
  }
}