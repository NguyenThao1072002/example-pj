import { CommonModule } from "@angular/common";
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-component-overview-by-manual',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './component-overview-by-manual.component.html',
  styleUrls: ['./component-overview-by-manual.component.scss']
})
export class ComponentOverviewByManualComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  message: string = 'Hello, Anh Hiếu!';

  loginForm: FormGroup;

  mockUsers = [
    { email: 'tt.1072002@gmail.com', password: 'password123' },
    { email: 'user2@example.com', password: 'mypassword' },
    { email: 'user3@example.com', password: 'testpassword' }
  ];
  constructor() {
    // Initialize Reactive Login Form
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    console.log('Constructor called');
  }


  ngOnInit(): void {
    console.log('ngOnInit called');
    // Initialize or fetch data here
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
    // React to changes in input properties
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
    // Custom change detection
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    // Called after content (ng-content) has been projected
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    // Called after every check of the component's or directive's content
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    // Called after component's view (and child views) have been initialized
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    // Called after every check of the component's view
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    // Clean up here (unsubscribe from Observables, detach event handlers, etc.)
  }

  changeMessage() {
    this.message = 'Message has been changed!';
  }

  onSubmit(MessageForm: any) {
    console.log('Template-driven Form Data:', MessageForm.value);


    if (MessageForm.valid) {
      alert('Message sent successfully: ' + MessageForm.value.message);
      MessageForm.reset();
    } else {
      alert('Please fill in the form correctly.');
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;


      const user = this.mockUsers.find(user => user.email === email && user.password === password);
      if (user) {
        alert('Login successful!');
        console.log('Logged in user:', user);
      } else {
        alert('Invalid email or password!');
        console.log('Login failed for email:', email);
      }
    } else {
      console.log('Form is invalid');
      alert('Please fill in the form correctly!');
    }
  }
}
