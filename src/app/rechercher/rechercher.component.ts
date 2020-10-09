import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';
import { FilmsProvider } from '../providers/film.provider';

@Component({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss']
})

export class RechercherComponent implements OnInit{
    public binding : string = 'Bonjour CDA';
    public title : string = 'Back to the Future';
    public year : number;
    public type : string = '';
    public error : string = '';

    public films = [];

    constructor(
        private alertCtrl : AlertController, 
        private rechercherFilm : FilmsProvider
    ){}

    ngOnInit(){}

    clicBouton(){
        this.binding = 'Clic !!!!!';
    }

    // vérification sur les champs
    public async rechercher(){
        this.error = '';
        if(!this.title || this.title.length <= 3){
            
            const alert = await this.alertCtrl.create({
                header : 'Informations manquantes',
                message : "Veuillez saisir un titre de 3 caractères",
                buttons : ['OK']
            });
            alert.present();
            return;
            /*
            this.error = "Veuillez saisir un titre de 3 caractères";
            return;
            */
        }

        /*
        if(!this.year || (this.year < 1900 || this.year > 2050)){
            this.error = "Veuillez saisir une année entre 1900 et 2050";
            return;
        }
        */

        if(this.type === undefined){
            this.error = "Veuillez choisir un type de média";
            return;
        }
    
        this.lancerRecherche();
    
    }

    private async lancerRecherche(){
        try{
            this.films = await this.rechercherFilm.search(this.title, this.year, this.type);
            for(let current of this.films){
                console.log(current);
            }
        }catch(err){
            const alert = await this.alertCtrl.create({
                header: err.message,
                message : 'Aucun film trouvé',
                buttons : ['OK']
            });
            alert.present();
        }
        /* v2
        this.rechercherFilm.search(this.title, this.year, this.type)
            .then((resultat) => {
                this.films = resultat;
            })
            .catch(async (err) =>{
                const alert = await this.alertCtrl.create({
                    header: 'Erreur appel Service',
                    message : 'Impossible de récupérer les films',
                    buttons : ['OK']
                });
                alert.present();
            });
        */
        /* V1
        this.films = [
            {
                Title : 'Film1',
                Poster : 'assets/icon/favicon.png',
                Year : 2012
            },
            {
                Title : 'Film2',
                Poster : 'assets/icon/favicon.png',
                Year : 1992
            },
            {
                Title : 'Film3',
                Poster : 'assets/icon/favicon.png',
                Year : 1958
            },
        ];
        */
    }
}