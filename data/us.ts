export class UsGirl {
    list: Array<{ id: number, name: string, info: string }>;
    constructor() {
        this.list = [
            {
                id: 1, name: 'Adriana Chechik', info: `
            Gender: Woman

            Age: 26 years old
            
            Country: USA               
            `},
            {
                id: 2, name: 'Anikka Albrite', info: `
            Gender: Woman

            Age: 29 years old
            
            Country: Czech Republic               
            `},
            {
                id: 3, name: 'August Ames', info: `
            Gender: Woman

            Age: 23 years old
            
            Country: Canada               
            `},
            {
                id: 4, name: 'AJ Applegate', info: `
            Gender: Woman

            Age: 28 years old

            Country: USA               
            `},
            {
                id: 5, name: 'India Summer', info: `
            Born: 1976-04-26

            Height: 165
            
            Measurements: 50
            
            Weight: 50
            
            Eyes: Brown
            
            Hair: Black               
            `},
            {
                id: 6, name: 'Lexi Belle', info: `
            Born: 1987-08-05

            Height: 160

            Measurements: 48

            Weight: 48

            Eyes: Hazel

            Hair: Blonde               
            `},
            {
                id:7,name:'Chanel Preston',info:`Born: 1985-12-01

                Height: 173
                
                Measurements: 59
                
                Weight: 59
                
                Eyes: Brown
                
                Hair: Brown`
            },
            {
                id:8,name:'Kristina Rose',info:`Born: 1984-04-14

                Height: 155
                
                Measurements: 50
                
                Weight: 50
                
                Eyes: Brown
                
                Hair: Brown`
            }
           
        ]
    }
    getData(): Array<{ id: number, name: string, info: string }> {
        return this.list;
    }


}