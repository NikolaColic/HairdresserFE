export class SocialNetwork {
    socialNetworkId : number;
    name : string; 
    
    constructor(userId : number,name : string)
    {
        this.socialNetworkId = userId; 
        this.name = name; 
    }
}