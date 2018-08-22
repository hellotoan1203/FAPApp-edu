export class JavGirl {
    list: Array<{ id: number, name: string, info: string }>;
    constructor() {
        this.list = [
            {
                id: 1, name: 'Yu Shinoda', info: `
            Date of birth:1991 Jul 21
            Blood Type: O Type
            City of Born: Tokyo
            Height155cm
            Size: B84(E-65) W58 H82               
            `},
            {
                id: 2, name: 'Yui Hatano', info: `
                Date of birth: 1988 May 24
                Blood Type: A Type
                City of Born: Kyoto
                Height: 163cm
                Size:B88(D) W59 H85              
            `},
            {
                id: 3, name: 'Miho Tono', info: `
            Date of birth: 1991 Jan 21
            Blood Type: A Type
            City of Born
            Height: 160cm
            Size: B87(E-70) W59 H85              
            `},
            {
                id: 4, name: 'Asahi Mizuno', info: `
            Date of birth1990 Nov 12
            Blood TypeA Type
            City of Born: 東京都
            Height165cm
            SizeB90 W58 H88               
            `},
            {
                id: 5, name: 'Mao Kurata', info: `
            Date of birth: 1994 Mar 07
            Blood Type: A Type
            City of Born: AKITA
            Height: 154cm
            Size: B95 W58 H87                 
            `},
            {
                id: 6, name: 'Miku Abeno', info: `
            Date of birth
            Blood Type- Type
            City of Born
            Height: 155cm
            Size: B80 W60 H83               
            `},
            {
                id: 7, name: 'Mao Hamasaki', info: `
            Date of birth: 1993 Oct 20
            Blood Type- Type
            City of Born: Chiba
            Height: 165cm
            Size: B85 W59 H84              
            `},
            {
                id: 8, name: 'Hibiki Otsuki', info: `
            Date of birth1988 Feb 21
            Blood TypeA Type
            City of BornHokkaido
            Height162cm
            SizeB88(D) W57 H85              
            `},
            {
                id: 9, name: 'Rena Aoi', info: `
            Date of birth
            Blood Type- Type
            City of Born
            Height: 155cm
            Size: B80 W60 H83               
            `},
            {
                id: 10, name: 'Miku Abeno', info: `
            Date of birth1996 Mar 19
            Blood Type- Type
            City of Born
            Height158cm
            SizeB80 W58 H85               
            `},
            {
                id: 11, name: 'Syunka Ayami', info: `
            Date of birth1993 Aug 15
            Blood TypeO Type
            City of Born東京都
            Height154cm
            SizeB88(D) W58 H83               
            `},
            {
                id: 12, name: 'Haruka Namiki', info: `
            Date of birth1993 Jul 07
            Blood TypeA Type
            City of BornTokyo
            Height158cm
            SizeB81 W58 H83             
            `},
            {
                id: 13, name: 'Yu Kawakami', info: `
                Date of birth1982 Mar 03
                Blood TypeB Type
                City of BornTokyo
                Height150cm
                SizeB84(D-70) W60 H83               
            `},
            {
                id: 14, name: 'Ruka Kanae', info: `
                Date of birth1993 Mar 04
                Blood TypeO Type
                City of BornChiba
                Height147cm
                SizeB83(D) W60 H85               
            `},
            {
                id: 15, name: 'Waka Ninomiya', info: `
                Date of birth1994 Apr 19
                Blood Type- Type
                City of Born
                Height154cm
                SizeB85 W58 H85              
            `},
            {
                id: 16, name: 'Seiran Igarashi', info: `
                Date of birth1996 Oct 23
                Blood Type- Type
                City of Born
                Height153cm
                SizeB82 W56 H85               
            `},
            {
                id: 17, name: 'Haruna Ayane', info: `
                Date of birth1993 Jan 08
                Blood TypeA Type
                City of BornNagano
                Height158cm
                SizeB80 W59 H88               
            `},
            {
                id: 18, name: 'Yuna Takase', info: `
                Date of birth1984 Nov 30
                Blood Type- Type
                City of Born
                Height155cm
                SizeB80 W58 H82               
            `},
            {
                id: 19, name: 'Nao Wakana', info: `
                Date of birth1994 Feb 06
                Blood Type- Type
                City of BornTokyo
                Height171cm
                SizeB88 W59 H88                
            `},
            {
                id: 20, name: 'Nao Mizuki', info: `
                Date of birth1984 Sep 18
                Blood TypeB Type
                City of BornTokyo
                Height159cm
                SizeB90(G-65) W59 H87               
            `}
        ]
    }
    getData(): Array<{ id: number, name: string, info: string }> {
        return this.list;
    }
}