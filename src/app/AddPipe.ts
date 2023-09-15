import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'gamani'
})

export class AddPipe implements PipeTransform {
    nums = 0;

    transform(value: number[]) {
        for (let i in value) {
            this.nums += value[i];
        }
        return this.nums;
    }
}



