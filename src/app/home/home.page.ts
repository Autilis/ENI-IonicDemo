import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Subscription } from 'rxjs';
import { Film } from '../models/film';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private subscription: Subscription

  constructor(
    private router : Router,
    private textToSpeechCtrl : TextToSpeech
  ) {}

  ngOnInit(){
    this.subscription = this.router.events.subscribe((event)=>{
      // trace de navigation
      //console.log("subscription", event);
    });
  }



}
