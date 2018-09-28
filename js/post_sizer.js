//TODO: Ver si esto es viable.

export class post_sizes{
    constructor(){
        this.min_chars_x_post = 1;
        this.max_chars_x_post = 80000;
    }
    get min_chars(){
        return this.min_chars_x_post;
    }

    set min_chars(minimum){
        this.min_chars_x_post = minimum;
    }

    get max_chars(){
        return this.max_chars_x_post;
    }

    set max_chars(maximum){
        this.max_chars_x_post = maximum;
    }
}
