import { Component } from '@angular/core';

interface dataContent {
  id?: string;
  title: string;
  content: string;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  effect = 'scrollx';
  dataOfAthlets:dataContent[] = [{
    title: 'Connecttion',
    content: 'Connect with coaches directly, you can ping coaches to view profile.'
  },{
    title: 'Collaboration',
    content: 'Work with other student athletes to increase visibility. When you share and like other playes videos it wil increase your visibility as a player. This it the team work aspect to Surface 1.'
  },{
    title: 'Growth',
    content: 'Resources and tools for you get better as a student Athelete. Access to training class, tutor sessions, etc.'
  }]
  dataOfPlayers:dataContent[] = [{
    title: 'Connecttion',
    content: 'Connect with talented athlete directly, you can watch their skills through video showreels directly form Surface 1.'
  },{
    title: 'Collaboration',
    content: 'Work with recruiter to increase your chances of finding talented athlete.'
  },{
    title: 'Growth',
    content: 'Save your time, recruit proper athlets for your team.'
  }]
  ngOnInit(): void {
    this.dataOfAthlets.map((item, index) => item.id = (index + 1).toString().padStart(2, '0'))
    this.dataOfPlayers.map((item, index) => item.id = (index + 1).toString().padStart(2, '0'))
  }
}
