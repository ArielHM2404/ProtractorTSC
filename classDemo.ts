export class classDemo {

    username:string;
    password:string;
    ssn:number;

    constructor(ssn:number){
        this.ssn=ssn;
    }    

    getUsername() {
        return this.username;
    }

    setUserName(userName:string) {
        this.username=userName;
    }

    getSsn(){
        return this.ssn;
    }

    setSsn(ssn:number){
        this.ssn=ssn;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password:string){
        this.password=password;
    }
}