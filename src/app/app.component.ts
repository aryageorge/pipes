import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Pipes';
  students = [
    { name: 'John', gender: 'Male' , marks:'25',dob:new Date('11-12-2000'),course:'mtech' },
    { name: 'Jany', gender: 'Female' , marks:'50',dob:new Date('11-12-2000'),course:'btech' },
    { name: 'Janet', gender: 'Female' , marks:'58',dob:new Date('11-12-2001'),course:'bcom' },
    { name: 'Jeffin', gender: 'Male' , marks:'96',dob:new Date('10-12-2000'),course:'bca' },
    { name: 'Jacob', gender: 'Male' , marks:'88',dob:new Date('11-1-2000'),course:'mbbs' },
    // Add more student details as needed
  ];
}
