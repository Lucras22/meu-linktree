import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  imports: [],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.scss',
  standalone: true,
})
export class ProfileHeader {
  @Input() data: any;
}
