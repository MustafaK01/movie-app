export class User{
    public email:string
    public userId:string
    private _token:string;
    private _tokenExpirationDate:Date;
    constructor(email:string,userId:string,_token:string,_tokenExpirationDate:Date){
        this.email=email;
        this.userId=userId;
        this._token=_token;
        this._tokenExpirationDate=_tokenExpirationDate
    }
    get token(){
        if(!this._tokenExpirationDate || new Date()>this._tokenExpirationDate){
            return null;
        }
        return this._token;
    }


    
}
