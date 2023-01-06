import { Component } from '@angular/core';

@Component({
  selector: 'app-app-slider',
  templateUrl: './app-slider.component.html',
  styleUrls: ['./app-slider.component.css']
})
export class AppSliderComponent {

  mousDown: number = 0;

  percentage: number = 0;
  pevPercentage: number = 0;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    window.onmousedown = e => {
      this.mousDown = e.clientX;
    };

    window.onmousemove = (e) => {
      if(this.mousDown == 0) return;
      var mouseDelta : number = this.mousDown - e.clientX;
      const maxWidth = window.innerWidth/2;

      this.percentage = this.pevPercentage + ((mouseDelta / maxWidth) * -100);

    }

    window.onmouseup = (e) => {
      this.mousDown = 0;
      this.pevPercentage = this.percentage;
    }

  }

}
