import { Component, OnInit } from '@angular/core';
import { Job } from 'src/shared/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  job1: Job = new Job('Developer', 'ReactJS', 'Pune');
  job2: Job = new Job('Tester', 'Angular', 'Mumbai');
  job3: Job = new Job('Trainer', 'JAVA', 'Chennai');
  job4: Job = new Job('Support', 'C++', 'Pune');
  job5: Job = new Job('Developer', 'JavaScript', 'Pune');
  job6: Job = new Job('Maager', 'AWS', 'Kolkata');

  jobsArr: Job[] = [this.job1, this.job2, this.job3, this.job4, this.job5, this.job6]

  constructor() { }

  ngOnInit(): void {
  }

}
