function Recommendation() {

    let moiscourant = new Date().getMonth();
    let printemps = moiscourant >= 2 && moiscourant <= 5;

    // let recommendation = printemps ? (
    //   <div> C'est le printemps, rempoter maintenant 💐</div>
    // ) : (
    //   <div> Ce n'est pas le moment de rempoter </div>
    // );

    if (!printemps){
        return <div> Ce n'est pas le moment de rempoter </div>
    }
    return <div> C'est le printemps, rempoter maintenant 💐</div>
}

export default Recommendation