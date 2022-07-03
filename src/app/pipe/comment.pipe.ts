import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comment',
})
export class CommentPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    console.log(value);
    if (value == 'Neutral') {
      return '<span class="badge bg-info">Neutral </span>';
    } else if (value == 'Useful') {
      return '<span class="badge bg-success">Useful </span>';
    } else if (value == 'Safe') {
      return '<span class="badge bg-success">Safe </span>';
    } else if (value == 'Nuisance') {
      return '<span class="badge bg-warning text-dark">Nuisance </span>';
    } else if (value == 'Unsafe') {
      return '<span class="badge bg-danger">Unsafe </span>';
    }
    return ' ';
  }
}
