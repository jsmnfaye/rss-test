import { NgModule } from '@angular/core';
import { PrettifierPipe } from './prettifier/prettifier';
import { HtmldecoderPipe } from './htmldecoder/htmldecoder';
@NgModule({
	declarations: [PrettifierPipe,
    HtmldecoderPipe],
	imports: [],
	exports: [PrettifierPipe,
    HtmldecoderPipe]
})
export class PipesModule {}