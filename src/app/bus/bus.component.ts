import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { CourseService } from '../course.service';
import { FormsModule } from '@angular/forms';
import { BusService } from '../bus.service';


@Component({
  selector: 'app-bus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css'
})
export class BusComponent {

  bus = { busName: '',occupancy: ''};

  constructor(private router: Router, private busService: BusService) {}

  onSubmit() {
    console.log(this.bus);
    this.busService.addBus(this.bus).subscribe(() => {
     
      // this.router.navigate(['/']);
     
    });
    alert(`Bus added successfully`)
  }

}

// import { Component } from '@angular/core';

 