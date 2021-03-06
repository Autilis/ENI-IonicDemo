export class Film{
    public imdbID : string;
    public Title : string;
    public Year : Number;
    public Poster : string;
    public Plot? : string; // ? => attribut optionnel

    public constructor(
        imdbID : string, 
        Title : string,
        Year : number,
        Poster : string, 
        Plot? : string
    ){
        this.imdbID = imdbID;
        this.Title = Title;
        this.Year = Year;
        this.Poster = Poster;
        this.Plot = Plot;
    }
}