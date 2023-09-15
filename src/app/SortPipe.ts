import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sort"
})

export class SortPipe implements PipeTransform {
    transform(value: any[], type: string) {
        if (type === "asc") {
            return value.sort();
        } else if (type === "desc") {
            return value.sort().reverse();
        } else {
            return value;
        }
    
        
    }
}

