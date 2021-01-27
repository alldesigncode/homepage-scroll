import { AfterViewInit, Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    gsap.to('.right, .nav-list, .bottom', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.home',
        scrub: true,
        markers: true,
        start: '60% 60%', // trigger element start, scroller start
        end: '70% 30%' // trigger element end, scroller end
      }
    })
  }
}
