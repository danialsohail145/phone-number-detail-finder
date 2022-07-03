import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentPipe } from './comment.pipe';

@NgModule({
  declarations: [CommentPipe],
  imports: [CommonModule],
  exports: [CommentPipe],
})
export class PipeModule {}
