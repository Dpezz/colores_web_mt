import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
    constructor(
        private _clipboardService: ClipboardService,
        private colorService: ColorService
    ) {}

    page_current: any;
    pages_total: any;
    colors: any;

    ngOnInit() {
        this.changeItem();
    }

    copyItem(item) {
        this._clipboardService.copyFromContent(item.color);
        item.isCopy = true;
    }

    changeItem(page = 1) {
        this.colorService.all(page).subscribe((data) => {
            data.data.map((data) => (data.isCopy = false));
            this.colors = data;
            this.page_current = data.page;
            this.pages_total = data.total_pages;
        });
    }

    next() {
        this.changeItem(this.page_current + 1);
    }

    prev() {
        this.changeItem(this.page_current - 1);
    }
}
