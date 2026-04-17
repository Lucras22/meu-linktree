import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule} from '@angular/common';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-link-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-card.html',
  styleUrl: './link-card.scss'
})
export class LinkCardComponent {
  @Input() item: any;
  @Input() isOpen: boolean = false;
  @Output() clickCard = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?autoplay=1`);
  }
}