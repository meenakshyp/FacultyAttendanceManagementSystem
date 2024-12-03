import { EventEmitter, Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AxiosService } from '../app/axios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private axiosService:AxiosService){}
  @Output() onSubmitLoginEvent = new EventEmitter();
  login: string = "";
  password: string = "";

  onSubmitLogin(): void {
    // this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
   if(this.password=="test123"){
    window.location.href = 'http://localhost:4200/dashboard';
   }
   else{
    alert("Wrong Credentials")
   }
   
  }

}
