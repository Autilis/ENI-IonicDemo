import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Film } from '../models/film';
import { FilmsProvider } from '../providers/film.provider';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public id : string;
  public film : Film;

  public isLecture : boolean = false;

  constructor(
      private route: ActivatedRoute,
      private filmsCtrl : FilmsProvider,
      private textToSpeechCtrl : TextToSpeech
  ) {
      this.route.params.subscribe((params)=>{
        this.id = params['id'];
        console.log("mon id : " + this.id);
        this.chargerDetailsFilms();
      });
  }

  ngOnInit() {
  }

  async chargerDetailsFilms(){
    this.film = await this.filmsCtrl.details(this.id);
  }

  
  async lireDescription() {
    console.log("Lecture de ", this.film.Plot);
    // Text-to-speech
    this.isLecture = true;
    try {
      await this.textToSpeechCtrl.speak(this.film.Plot);
    } catch (err) {
      console.log(err);
    }finally{
      this.isLecture = false;
    }
  } 
  

}
