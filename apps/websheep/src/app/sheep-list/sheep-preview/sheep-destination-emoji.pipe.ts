import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Destination } from '../../sheep-core/sheep';

@Pipe({
  name: 'sheepDestinationEmoji'
})
export class SheepDestinationEmojiPipe implements PipeTransform {
  private _emojiMap = new Map<Destination, string>([
    [Destination.Kebab, '🍖'],
    [Destination.Wool, '🥼']
  ]);

  transform(destination: Destination): string {
    return this._emojiMap.get(destination);
  }
}

@NgModule({
  declarations: [SheepDestinationEmojiPipe],
  exports: [SheepDestinationEmojiPipe]
})
export class SheepDestinationEmojiPipeModule {}
