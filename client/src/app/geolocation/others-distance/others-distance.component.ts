import {Component, OnInit, Input} from '@angular/core';
import {distanceOptions} from '../../settings/config';
import {UserService} from '../../service/user.service';
import {AppState} from '../../models/AppState';
import {Distance} from '../../models/Distance';

@Component({
  selector: 'app-others-distance',
  templateUrl: './others-distance.component.html',
  styleUrls: ['./others-distance.component.css'],
  providers: [UserService]
})
export class OthersDistanceComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() state: AppState;
  filteredDistances: Distance[];
  selectedDistance: number;
  distanceOptions = distanceOptions;

  ngOnInit() {
    this.filteredDistances = this.state.distances;
  }

  private filterUsers(e) {
    console.log(e);
    console.log(this.selectedDistance);
    this.filteredDistances = this.state.distances.filter((data) => {
      return (data.distance < this.selectedDistance);
    });
    console.log(this.filteredDistances);
    // TODO: 選択した距離に応じてでチャットに表示するユーザーを変更する処理を入れる
  }
}
