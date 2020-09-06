//Is he gonna survive?

    function hero(bullets, dragons){
    return bullets >= dragons * 2
}
// OR 2ND SOL.

const hero = (bullets, dragons) => dragons * 2 <= bullets;