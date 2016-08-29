import {Directive,HostBinding, Input, HostListener} from '@angular/core';

@Directive({
    selector : '[iFavorite]'
})

export class FavoriteDirective{

        @HostBinding('class.is-favorite') isFavorite = true;
        @HostBinding('class.is-favorite-hovering') hovering = false;

        @HostListener('mouseenter')
        onMouseEnter(){
            this.hovering = true;
        }
        @HostListener('mouseleave')
        onMouseLeave(){
            this.hovering = false;
        }
        @Input()
        set iFavorite(value){
            this.isFavorite = value;
        }


}